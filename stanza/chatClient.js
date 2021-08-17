import * as XMPP from "stanza";
import store from "../redux/store/store";
import { updateUserStatus, setLoginError } from "../redux/actions/index";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const cokie = cookies.get("credentials");
let client;

export default function chatClient(username, password) {
  client = XMPP.createClient({
    jid: username,
    password,
    transports: {
      websocket: "ws://mongoose.mysmartpbx.org:5280/ws-xmpp",
      bosh: "false",
    },
    rosterVer: "ver14",
  });
  //client.on("*", console.log);
  client.on("session:started", () => {
    console.log("session started");
    getContacts();
    client.sendPresence();
  });

  //pinging the server
  setInterval(() => {
    var ifConnected = window.navigator.onLine;
    if (ifConnected) {
      // console.log("internet Connection available");
      client
        .ping(username)
        .then((message) => {
          //console.log("ping send");
        })
        .catch((error) => {
          // const user = localStorage.getItem("username");
          // const pass = localStorage.getItem("password");
          //console.log("ping error", error);
          // let reconnect = chatClient(user, pass);
          // console.log("connect", reconnect);
          // reconnect.connect();
        });
    } else {
      console.log("Connection not available");
    }
  }, 13000);

  client.on("auth:failed", () => {
    console.log("xmpp authentication failed");
    store.dispatch(setLoginError("INCORRECT USERNAME OR PASSWORD"));
  });

  client.on("subscribe", (ReceivedPresence) => {
    console.log("received request from", ReceivedPresence);
    client.acceptSubscription(ReceivedPresence.from);
    client.subscribe(ReceivedPresence.from, () =>
      console.log("subscrption request sent back to" + ReceivedPresence.from)
    );
  });

  client.on("presence", (presence) => {
    if (presence.hasOwnProperty("type") && presence.type == "unavailable") {
      //here we need to update user status that user is offline
      console.log("i am unavailable", presence.from);
      store.dispatch(
        updateUserStatus({
          id: presence.from.split("@")[0],
          onlineStatus: "offline",
        })
      );
    } else if (!presence.hasOwnProperty("type")) {
      //here we need to update user status that user is online
      console.log("i am available", presence.from);
      store.dispatch(
        updateUserStatus({
          id: presence.from.split("@")[0],
          onlineStatus: "online",
        })
      );
    }
  });

  client.on("unavailable", (presence) => {
    // console.log(presence.from + " is offline");
  });
  // client.on("available", (presence) => {
  //   console.log("available", presence);
  // });
  return client;
}

let roster;
const getContacts = async () => {
  let contacts = await client.getRoster();

  roster = contacts.items;
};

export const getRosterItems = () => {
  return roster;
};

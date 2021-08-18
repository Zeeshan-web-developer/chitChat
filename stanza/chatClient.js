import * as XMPP from "stanza";
import dateTime from "../containers/leftSidebar/datetime";
import store from "../redux/store/store";
import {
  updateUserStatus,
  setLoginError,
  setNewMessage,
} from "../redux/actions/index";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const cokie = cookies.get("credentials");
let client;

export default function chatClient(username, password) {
  console.log("connection request");
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
    let reconnect;
    if (ifConnected) {
      client
        .ping(username)
        .then((message) => {
          console.log("Messaage ping");
        })
        .catch((error) => {
          const user = localStorage.getItem("username");
          const pass = localStorage.getItem("password");
          console.log("ping error", error);
          reconnect = chatClient(user, pass);
          console.log("connect", user, pass);
          reconnect.disconnect();
          reconnect.connect();
        });
    } else {
      console.log("Connection not available");
      reconnect.disconnect();
    }
  }, 60000);

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

  //here we listen incoming messages
  client.on("message", (newMessage) => {
    newMessage["messageTime"] = dateTime();
    newMessage["direction"] = "received";
    newMessage["from"] = newMessage.from.split("/")[0];
    store.dispatch(setNewMessage(newMessage));
  });
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

export const sendNewMessage = (newMessage) => {
  client && client.sendMessage(newMessage);
};

import * as XMPP from "stanza";
import dateTime from "../containers/leftSidebar/datetime";
import store from "../redux/store/store";
import {
  updateUserStatus,
  setLoginError,
  setNewMessage,
  setLastMessage,
  removeRecentUser,
  addNewUSer,
  updateRecentUserStatus,
} from "../redux/actions/index";
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
    timeout: 60,
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
    const user = localStorage.getItem("username");
    const pass = localStorage.getItem("password");
    if (ifConnected) {
      client
        .ping(username)
        .then((message) => {
          console.log("Messaage ping");
        })
        .catch((error) => {
          console.log("ping error", error);
          reconnect = chatClient(user, pass);
          console.log("connect", user, pass);
          //reconnect.disconnect();
          reconnect.connect();
          setTimeout(() => {
            console.log("after error connect to the server after 60 secnods");
            reconnect.connect();
          }, 60000);
        });
    } else {
      console.log("Connection not available");
      client.disconnect();
    }
  }, 5000);

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
      console.log("i am unavailable", presence.from.split("/")[0]);
      store.dispatch(
        updateRecentUserStatus({
          id: presence.from.split("/")[0],
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
      store.dispatch(
        updateRecentUserStatus({
          id: presence.from.split("/")[0],
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
    console.log("on message", newMessage);
    receivedMessage(newMessage);
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
  console.log("at send" + newMessage);
  client && client.sendMessage(newMessage);
};

const receivedMessage = (newMessage) => {
  const recentUsers = store.getState().user.chatedUsers;
  let found = false;
  console.log("rec", newMessage);
  newMessage["messageTime"] = dateTime();
  newMessage["direction"] = "received";
  newMessage["from"] = newMessage.from.split("/")[0];
  newMessage["fromto"] = newMessage.from;
  let splitBody = newMessage && newMessage.body.split("&");
  newMessage["body"] = splitBody && splitBody[0];
  if (splitBody.length > 0 && typeof splitBody !== "undefined") {
    newMessage["first_name"] = splitBody[1].split(":")[1];
  }
  //newMessage["first_name"] = splitBody.length > 0 && splitBody !=="undefined" &&splitBody[1].split(":")[1];
  for (var i = 0; i < recentUsers.length; i++) {
    if (recentUsers[i].id === newMessage.from) {
      found = true;
      break;
    }
  }

  if (!found) {
    recentUsers.map((ci) => {
      if (!ci.hasOwnProperty("mesg")) {
        store.dispatch(removeRecentUser(ci.id));
      }
    });

    store.dispatch(
      addNewUSer({
        id: newMessage.from,
        first_name: newMessage.first_name,
        status: "online",
        onlineStatus: "online",
        status: "online",
      })
    );
  }
  store.dispatch(setNewMessage(newMessage));
  store.dispatch(
    setLastMessage({
      id: newMessage.from,
      message: newMessage.body,
      time: dateTime(),
    })
  );
};

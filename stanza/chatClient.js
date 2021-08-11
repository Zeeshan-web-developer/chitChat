import * as XMPP from "stanza";
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
  // client.on("*", console.log);
  client.on("session:started", () => {
    // client.subscribe("sumanth@mongoose.mysmartpbx.org");
    console.log("session started");
    client.sendPresence();
  });

  client.on("auth:failed", () => {
    console.log("xmpp authentication failed");
  });
  client.on("subscribe", (ReceivedPresence) =>
    client.acceptSubscription(ReceivedPresence.from)
  );
  return client;
}

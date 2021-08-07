import { useEffect, useState } from "react";
import Chat from "./chat";
import { useSelector } from "react-redux";
import Call from "./call";
import Contact from "./contact";
import EasyTimer from "easytimer";

const ChitChat = () => {
  const currentTab = useSelector((state) => state.user.chatboard);
  const [timer, setTimer] = useState(new EasyTimer());
  const [timeValues, setTimeValues] = useState("");

  useEffect(() => {
    timer.start();
    timer.addEventListener("secondsUpdated", tick);
    return () => {
      timer.removeEventListener("secondsUpdated", tick);
    };
  }, []);

  const tick = (e) => {
    const timeValue = timer.getTimeValues().toString();
    setTimeValues(timeValue);
  };
  return (
    <div className="chitchat-main small-sidebar" id="content">
      {currentTab === "chat" ? (
        <Chat timeValues={timeValues} />
      ) : (
        <Chat timeValues={timeValues} />
      )}
      {/* <Contact /> */}
    </div>
  );
};

export default ChitChat;

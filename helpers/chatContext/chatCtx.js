import React, { useState, useEffect } from "react";
import Context from "./index";
import { fetchChatMemberApi, fetchChatApi } from "../../api/index";

const ChatProvider = (props) => {
  const [chatMembers, setChatMembers] = useState([]);
  const [chats, setChats] = useState([]);
  const currentUserId = 0;
  const [selectedUser, setSelectedUser] = useState({
    id: 0,
    name: "Jony Lynetin",
    thumb: "contact/2.jpg",
    status: "8",
    mesg: "Typing................",
    lastSeenDate: "30/11/19",
    onlineStatus: "online",
    typing: true,
  });
  const [isTyeping, setIsTypeing] = useState(false);

  useEffect(() => {
    // get all initial chat users

    fetchChatMemberApi().then((res) => {
      setChatMembers(res.data);
      if (res) {
        fetchChatApi().then((chatres) => {
          const selectedUserId = chatres.data[0].users.find(
            (x) => x !== currentUserId
          );
          const IsselectedUser = res.data.find((x) => x.id === selectedUserId);
          setSelectedUser(IsselectedUser);
        });
      }
    });
    // get initial chat between two chat users
    fetchChatApi().then((res) => {
      setChats(res.data);
      if (res) {
        fetchChatMemberApi().then((memberres) => {
          const selectedUserId = res.data[0].users.find(
            (x) => x !== currentUserId
          );
          const IsselectedUser = memberres.data.find(
            (x) => x.id === selectedUserId
          );
          setSelectedUser(IsselectedUser);
        });
      }
    });
  }, []);

  // chat with user first time
  const createChat = (currentUserId, selectedUserId, chats, onlineStatus) => {
    let conversation = {
      id: chats.length + 1,
      users: [currentUserId, selectedUserId],
      lastMessageTime: "-",
      messages: [],
      stickers: [],
      onlineStatus: onlineStatus,
    };

    chats.splice(0, 0, conversation); //we are adding conversion at 0th index
    const selectedUser = chatMembers.find((x) => x.id === selectedUserId);
    setChats([...chats]);
    setSelectedUser(selectedUser);
  };

  // change existing chat between two chat users
  const changeChat = (userId) => {
    const selectedUser = chatMembers.find((x) => x.id === userId);
    setSelectedUser(selectedUser);
  };

  // send message to selected chat users
  const sendMessage = (currentUserId, selectedUserId, messageInput, chats) => {
    let chat = chats.find(
      (x) => x.users.includes(currentUserId) && x.users.includes(selectedUserId)
    ); // find selected chat User Id
    const now = new Date();
    const time = now.getHours() + ":" + now.getMinutes();
    if (chat) {
      chat.messages.push({
        sender: currentUserId,
        time: time,
        text: messageInput,
        status: true,
      });
      chat.lastMessageTime = time;
      let chats_data = chats.filter((x) => x.id !== chat.id);
      chats_data.splice(0, 0, chat);
      const selectedUser = chatMembers.find((x) => x.id === selectedUserId);
      setChats([...chats]); // update chats messages
      setSelectedUser(selectedUser);
    }
  };

  // reply message to selected chat users
  const replyMessage = (currentUserId, selectedUserId, replyMessage, chats) => {
    let chat = chats.find(
      (x) => x.users.includes(currentUserId) && x.users.includes(selectedUserId)
    ); // find selected chat User Id
    const now = new Date();
    const time = now.getHours() + ":" + now.getMinutes();
    if (chat) {
      chat.messages.push({
        sender: selectedUserId,
        time: time,
        text: replyMessage,
        read: true,
      });
      chat.lastMessageTime = time;
      chat.online = "";
      let chats_data = chats.filter((x) => x.id !== chat.id);
      chats_data.splice(0, 0, chat);
      const selectedUser = chatMembers.find((x) => x.id === selectedUserId);
      selectedUser.onlineStatus = "online"; // chat user reply the message then set selected chat user  status to "online"
      setChats([...chats]); // update chats messages
      setSelectedUser(selectedUser);
    }
  };

  // send stickers or images
  const sendImages = (currentUserId, selectedUserId, image, chats) => {
    let chat = chats.find(
      (x) => x.users.includes(currentUserId) && x.users.includes(selectedUserId)
    ); // find selected chat User Id
    const now = new Date();
    const time = now.getHours() + ":" + now.getMinutes();
    if (chat) {
      chat.stickers.push({
        sender: currentUserId,
        time: time,
        stickers: image,
        status: true,
      });
      chat.lastMessageTime = time;
      chat.online = "";
      let chats_data = chats.filter((x) => x.id !== chat.id);
      chats_data.splice(0, 0, chat);
      const selectedUser = chatMembers.find((x) => x.id === selectedUserId);
      setChats([...chats]); // update chats messages
      setSelectedUser(selectedUser);
    }
  };

  // when chat user replied to our message existing tyeping loader
  const typingMessage = (typeing) => {
    setIsTypeing(typeing);
  };

  return (
    <Context.Provider
      value={{
        chatMembers: chatMembers,
        chats: chats,
        currentUser: chatMembers[0],
        selectedUser: selectedUser,
        isTyeping: isTyeping,
        changeChat: changeChat,
        createChat: createChat,
        sendMessage: sendMessage,
        replyMessage: replyMessage,
        sendImages: sendImages,
        typingMessage: typingMessage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ChatProvider;

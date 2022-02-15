import axios from "axios";

export const fetchChatMemberApi = () => {
  return axios.get(`/api/chatMember.json`);
};

export const fetchChatApi = () => {
  return axios.get(`/api/chat.chats.json`);
};

export const instance = axios.create({
  baseURL: "https://,
});
export default instance;

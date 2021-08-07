import axios from "axios";

export const fetchChatMemberApi = () => {
  return axios.get(`/api/chatMember.json`);
};

export const fetchChatApi = () => {
  return axios.get(`/api/chat.chats.json`);
};

export const instance = axios.create({
  baseURL: "https://karthik.mysmartpbx.org:8443/v2/",
});
export default instance;
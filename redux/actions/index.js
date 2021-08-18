import * as actionTypes from "./types";
import axios from "../../api/index";
import Cookies from "universal-cookie";
const id = "fbdcd3c94af9ffaa12f0ff4308d3b9bd";
const cookies = new Cookies();
const cokie = cookies.get("credentials");

export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  payload: user,
});

export const setUSerStatus = (userStatus) => ({
  type: actionTypes.SET_USER_STATUS,
  payload: userStatus,
});

export const setClient = (client) => ({
  type: actionTypes.SET_CLIENT,
  payload: client,
});

export const setLoginError = (error) => ({
  type: actionTypes.LOGIN_ERROR,
  payload: error,
});
export const loginLoding = (status) => ({
  type: actionTypes.LOGIN_LODING,
  payload: status,
});
export const logout = (status) => ({
  type: actionTypes.ON_LOGOUT,
  payload: status,
});
export const setActiveTab = (tab) => ({
  type: actionTypes.SET_ACTIVE_TAB,
  payload: tab,
});

export const setChatWith = (username) => ({
  type: actionTypes.SET_CHAT_WITH,
  payload: username,
});

export const chatededUsers = (nav) => ({
  type: actionTypes.SET_CHATED_USERS,
  payload: nav,
});

export const unmountComponent = (any) => ({
  type: actionTypes.CHAT_COMPONENT_UNMOUNT,
  payload: any,
});

export const addNewUSer = (payload) => ({
  type: actionTypes.ADD_NEW_USER,
  payload: payload,
});

export const removeRecentUser = (id) => ({
  type: actionTypes.REMOVE_USER,
  payload: id,
});

export const updateLastMessageTime = (payload) => ({
  type: actionTypes.LAST_MESSAGE_TIME,
  payload: {
    id: payload.id,
    time: payload.time,
  },
});

export const setLastMessage = (payload) => ({
  type: actionTypes.SET_LAST_MESSAGE,
  payload: {
    id: payload.id,
    lastMessage: payload.message,
    time: payload.time,
  },
});

export const setRoster = (contacts) => ({
  type: actionTypes.SET_ROSTER,
  payload: contacts,
});

export const updateUserStatus = (payload) => ({
  type: actionTypes.UPDATE_USER_STATUS,
  payload: {
    id: payload.id,
    onlineStatus: payload.onlineStatus,
  },
});

export const setAllUsers = (payload) => ({
  type: actionTypes.SET_ALL_USERS,
  payload: payload,
});

export const setNewMessage = (payload) => ({
  type: actionTypes.SET_NEW_MESSAGE,
  payload,
});

export const fetchUsers = () => {
  try {
    return async (dispatch) => {
      const response = await axios.get(`accounts/${id}/users`, {
        headers: {
          "x-auth-token": cokie.AuthToken,
        },
      });
      dispatch({ type: actionTypes.SET_USERS, payload: response.data.data });
    };
  } catch (err) {
    dispatch({
      type: actionTypes.LOGIN_ERROR,
      payload: "error in fetching users",
    });
  }
};

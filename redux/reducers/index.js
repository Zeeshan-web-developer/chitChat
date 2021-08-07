import * as actionTypes from "../actions/types";
import { combineReducers } from "redux";
const initialState = {
  currentUser: null,
  accountId: null,
  userStatus: "unavailable",
  client: null,
  loginErrors: [],
  loading: false,
  activeTab: "chat",
  users: [],
  chatWith: "A",
  newContact: "contact",
  componentUnmount: null,
  chatedUsers: [
    {
      id: 1,
      first_name: "A",
      status: "online",
      mesg: "how are you",
      lastSeenDate: "30/11/19",
      onlineStatus: "online",
      lastMessageAt: "2021-08-07 09:03:10",
    },
    {
      id: 2,
      first_name: "B",
      status: "online",
      mesg: "how are you",
      lastSeenDate: "30/11/19",
      onlineStatus: "online",
      lastMessageAt: "2021-08-07 09:03:56",
    },
    {
      id: 3,
      first_name: "C",
      status: "online",
      mesg: "how are you",
      lastSeenDate: "30/11/19",
      onlineStatus: "online",
      lastMessageAt: "2021-08-07 09:04:10",
    },
    {
      id: 4,
      first_name: "D",
      status: "online",
      mesg: "how are you",
      lastSeenDate: "30/11/19",
      onlineStatus: "online",
      lastMessageAt: "2021-08-07 09:05:10",
    },
  ],
};
const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case actionTypes.SET_USER_STATUS:
      return {
        ...state,
        userStatus: action.payload,
      };
    case actionTypes.SET_CLIENT:
      return {
        ...state,
        client: action.payload,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        loginErrors: [action.payload],
      };
    case actionTypes.LOGIN_LODING:
      return {
        ...state,
        loading: action.payload,
      };

    case actionTypes.SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    case actionTypes.SET_USERS:
      return {
        ...state,
        users: [action.payload],
      };
    case actionTypes.SET_CHAT_WITH:
      return {
        ...state,
        chatWith: action.payload,
      };
    case actionTypes.SET_CHATED_USERS:
      return {
        ...state,
        newContact: action.payload,
      };

    case actionTypes.CHAT_COMPONENT_UNMOUNT:
      return {
        ...state,
        componentUnmount: action.payload,
      };

    case actionTypes.ADD_NEW_USER:
      return {
        ...state,

        chatedUsers: [action.payload, ...state.chatedUsers],
      };
    case actionTypes.REMOVE_USER:
      return {
        ...state,

        chatedUsers: state.chatedUsers.filter(
          (user) => user.id !== action.payload
        ),
      };
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  user: user_reducer,
});
export default rootReducer;

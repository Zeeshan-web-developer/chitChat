import * as actionTypes from "../actions/types";
import { combineReducers } from "redux";
import update from "react-addons-update";
const initialState = {
  currentUser: { username: null, accountId: null, jid: null },
  accountId: null,
  userStatus: "unavailable",
  client: null,
  loginErrors: [],
  loading: false,
  activeTab: "chat",
  users: [],
  chatWith: { name: "A", status: "online", id: 2 },
  newContact: "contact",
  componentUnmount: null,
  roster: "",
  alluserStatus: [],
  allusers: [],
  allMessage: [
    {
      from: 2,
      to: 1,
      messageTime: "2021-08-07 09:03:10",
      messageBody: "i have received this message from user with id 2",
      chatType: "chat",
      direction: "received",
    },

    {
      from: 1,
      to: 2,
      messageTime: "2021-08-07 09:03:10",
      messageBody: "assume i amm a logged in user . i am sending this message",
      chatType: "chat",
      direction: "send",
    },
    {
      from: 2,
      to: 1,
      messageTime: "2021-08-07 09:03:10",
      messageBody: "i have received second  message from user with id 2",
      chatType: "chat",
      direction: "received",
    },
  ],
  chatedUsers: [
    {
      id: 1,
      first_name: "JACKILINE",
      status: "online",
      mesg: "how are you",
      lastSeenDate: "30/11/19",
      onlineStatus: "online",
      lastMessageAt: "2021-08-07 09:03:10",
    },
    {
      id: 2,
      first_name: "BRONNNZE",
      status: "offline",
      mesg: "how are you",
      lastSeenDate: "30/11/19",
      onlineStatus: "offline",
      lastMessageAt: "2021-08-07 09:03:56",
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

    case actionTypes.SET_NEW_MESSAGE:
      return {
        ...state,

        allMessage: [...state.allMessage, action.payload],
      };
    case actionTypes.REMOVE_USER:
      return {
        ...state,

        chatedUsers: state.chatedUsers.filter(
          (user) => user.id !== action.payload
        ),
      };

    case actionTypes.LAST_MESSAGE_TIME:
      return update(state, {
        chatedUsers: {
          [action.payload.id]: {
            lastMessageAt: { $set: action.payload.time },
          },
        },
      });

    case actionTypes.SET_ROSTER:
      return {
        ...state,
        roster: [...state.roster, action.payload],
      };
    case actionTypes.SET_ALL_USERS:
      return {
        ...state,
        allusers: action.payload,
      };
    case actionTypes.UPDATE_USER_STATUS:
      console.log("inside reducer");
      let found =
        state.alluserStatus && state.alluserStatus.length
          ? !!state.alluserStatus.find((u) => u.id === action.payload.id)
          : false;

      //if the user is already
      if (found) {
        console.log("user alredy already exists");
        return {
          ...state,
          alluserStatus: state.alluserStatus.map((userStatus, i) =>
            userStatus.id === action.payload.id
              ? { ...userStatus, onlineStatus: action.payload.onlineStatus }
              : userStatus
          ),
        };

        //update the user status for fist time
      } else {
        return {
          ...state,
          alluserStatus: [...state.alluserStatus, action.payload],
        };
      }

    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  user: user_reducer,
});
export default rootReducer;

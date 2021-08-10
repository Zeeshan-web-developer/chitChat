"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var actionTypes = _interopRequireWildcard(require("../actions/types"));

var _redux = require("redux");

var _reactAddonsUpdate = _interopRequireDefault(require("react-addons-update"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
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
  chatedUsers: [{
    id: 1,
    first_name: "JACKILINE",
    status: "online",
    mesg: "how are you",
    lastSeenDate: "30/11/19",
    onlineStatus: "online",
    lastMessageAt: "2021-08-07 09:03:10"
  }, {
    id: 2,
    first_name: "BRONNNZE",
    status: "online",
    mesg: "how are you",
    lastSeenDate: "30/11/19",
    onlineStatus: "online",
    lastMessageAt: "2021-08-07 09:03:56"
  }]
};

var user_reducer = function user_reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.SET_USER:
      return _objectSpread({}, state, {
        currentUser: action.payload
      });

    case actionTypes.SET_USER_STATUS:
      return _objectSpread({}, state, {
        userStatus: action.payload
      });

    case actionTypes.SET_CLIENT:
      return _objectSpread({}, state, {
        client: action.payload
      });

    case actionTypes.LOGIN_ERROR:
      return _objectSpread({}, state, {
        loginErrors: [action.payload]
      });

    case actionTypes.LOGIN_LODING:
      return _objectSpread({}, state, {
        loading: action.payload
      });

    case actionTypes.SET_ACTIVE_TAB:
      return _objectSpread({}, state, {
        activeTab: action.payload
      });

    case actionTypes.SET_USERS:
      return _objectSpread({}, state, {
        users: [action.payload]
      });

    case actionTypes.SET_CHAT_WITH:
      return _objectSpread({}, state, {
        chatWith: action.payload
      });

    case actionTypes.SET_CHATED_USERS:
      return _objectSpread({}, state, {
        newContact: action.payload
      });

    case actionTypes.CHAT_COMPONENT_UNMOUNT:
      return _objectSpread({}, state, {
        componentUnmount: action.payload
      });

    case actionTypes.ADD_NEW_USER:
      return _objectSpread({}, state, {
        chatedUsers: [action.payload].concat(_toConsumableArray(state.chatedUsers))
      });

    case actionTypes.REMOVE_USER:
      return _objectSpread({}, state, {
        chatedUsers: state.chatedUsers.filter(function (user) {
          return user.id !== action.payload;
        })
      });

    case actionTypes.LAST_MESSAGE_TIME:
      return (0, _reactAddonsUpdate["default"])(state, {
        chatedUsers: _defineProperty({}, action.payload.id, {
          lastMessageAt: {
            $set: action.payload.time
          }
        })
      });

    default:
      {
        return state;
      }
  }
};

var rootReducer = (0, _redux.combineReducers)({
  user: user_reducer
});
var _default = rootReducer;
exports["default"] = _default;
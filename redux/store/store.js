import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxReset from "redux-reset";
import logger from "redux-logger";

const store = createStore(
  rootReducer,
  composeWithDevTools(reduxReset(), applyMiddleware(thunk))
);
export default store;

import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxReset from "redux-reset";
import logger from "redux-logger";
// import { persistStore, persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage";
// import storage from "./storage";
// const perssistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(perssistConfig, rootReducer);
const store = createStore(
  rootReducer,
  composeWithDevTools(reduxReset(), applyMiddleware(thunk))
);

// export const persistor = persistStore(store);
export default store;

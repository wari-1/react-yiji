import { createStore, applyMiddleware, combineReducers } from "redux";
import { logger } from "redux-logger";
import Home from "./reducers/Home";
const rootReduces = combineReducers({
  Home
});
export default createStore(rootReduces, applyMiddleware(logger));

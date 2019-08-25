import { createStore, applyMiddleware, combineReducers } from "redux";
import { logger } from "redux-logger";
import zhanxun from "./reducers/zhanxun";
const rootReduces = combineReducers({
  zhanxun
});
export default createStore(rootReduces, applyMiddleware(logger));

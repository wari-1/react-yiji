import { createStore, applyMiddleware, combineReducers } from "redux";
import { logger } from "redux-logger";
import zhanxun from "./reducers/zhanxun";
const rootReduces = combineReducers({
  zhanxun,
  tuijian
});
export default createStore(rootReduces, applyMiddleware(logger));

import { createStore, applyMiddleware, combineReducers } from "redux";
import { logger } from "redux-logger";
import zhanxun from "./reducers/zhanxun";
import tuijian from "./reducers/tuijian";
const rootReduces = combineReducers({
  zhanxun,
  tuijian
});
export default createStore(rootReduces, applyMiddleware(logger));

import { createStore, applyMiddleware, combineReducers } from "redux";
import { logger } from "redux-logger";
import zhanxun from "./reducers/zhanxun";
import tuijian from "./reducers/tuijian";
import geren from "./reducers/geren";
const rootReduces = combineReducers({
  zhanxun,
  tuijian,
  geren
});
export default createStore(rootReduces, applyMiddleware(logger));

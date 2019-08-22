import { createStore, applyMiddleware, combineReducers } from "redux";
import { logger } from "redux-logger";

const rootReduces = combineReducers({});
export default createStore(rootReduces, applyMiddleware(logger));

import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import reducer from "./reducer";
import thunk from "redux-thunk";
const middleware = [];
middleware.push(logger);
middleware.push(thunk)

export const store = createStore(reducer, applyMiddleware(...middleware));
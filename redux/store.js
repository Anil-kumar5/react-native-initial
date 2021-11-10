import { createStore , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./reducer";
export const Store = createStore(loginReducer,applyMiddleware(thunk))

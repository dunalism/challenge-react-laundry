import { combineReducers } from "redux";
import { loginReducer } from "./userState";

export const reducers = combineReducers({
  login: loginReducer,
});

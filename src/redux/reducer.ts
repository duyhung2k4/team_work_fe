import { combineReducers } from "redux";
import { registerSlice } from "./slice/profile.slice";
import { registerApi } from "./query/api/register.api";
import { loginApi } from "./query/api/login.api";

export const apiReducer = {
  [registerApi.reducerPath]: registerApi.reducer,
  [loginApi.reducerPath]: loginApi.reducer,
}
export const reducer = combineReducers({
  profile: registerSlice.reducer,
  ...apiReducer,
})
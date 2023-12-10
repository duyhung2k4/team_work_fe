import { combineReducers } from "redux";
import { profileSlice } from "./slice/profile.slice";
import { registerApi } from "./query/api/register.api";
import { loginApi } from "./query/api/login.api";

export const apiReducer = {
  [registerApi.reducerPath]: registerApi.reducer,
  [loginApi.reducerPath]: loginApi.reducer,
}
export const reducer = combineReducers({
  profile: profileSlice.reducer,
  ...apiReducer,
})
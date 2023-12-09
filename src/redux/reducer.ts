import { combineReducers } from "redux";
import { registerSlice } from "./slice/profile.slice";
import { registerApi } from "./query/api/register.api";

export const apiReducer = {
  [registerApi.reducerPath]: registerApi.reducer,
}
export const reducer = combineReducers({
  profile: registerSlice.reducer,
  ...apiReducer,
})
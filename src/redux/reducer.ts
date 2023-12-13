import { combineReducers } from "redux";
import { profileSlice } from "./slice/profile.slice";
import { registerApi } from "./query/api/register.api";
import { loginApi } from "./query/api/login.api";
import { projectApi } from "./query/api/project";
import { projectSlice } from "./slice/project.slice";
import { accountApi } from "./query/api/account.api";

export const apiReducer = {
  [registerApi.reducerPath]: registerApi.reducer,
  [loginApi.reducerPath]: loginApi.reducer,
  [projectApi.reducerPath]: projectApi.reducer,
  [accountApi.reducerPath]: accountApi.reducer,
}
export const reducer = combineReducers({
  profile: profileSlice.reducer,
  project: projectSlice.reducer,
  ...apiReducer,
})
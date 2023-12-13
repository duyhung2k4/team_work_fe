import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { registerApi } from "./query/api/register.api";
import { loginApi } from "./query/api/login.api";
import { projectApi } from "./query/api/project";
import { accountApi } from "./query/api/account.api";
import { taskApi } from "./query/api/task";

const appMiddleware = [
  registerApi.middleware, 
  loginApi.middleware,
  projectApi.middleware,
  accountApi.middleware,
  taskApi.middleware,
];

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }).concat(appMiddleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
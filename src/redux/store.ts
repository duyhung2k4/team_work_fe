import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { registerApi } from "./query/api/register.api";

const appMiddleware = [registerApi.middleware];

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }).concat(appMiddleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
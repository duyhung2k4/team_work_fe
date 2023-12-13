import Cookies from "js-cookie";

import { CredentialModel } from "@/model/credential";
import { createSlice } from "@reduxjs/toolkit";
import { loginApi } from "../query/api/login.api";
import { COOKIES } from "@/constant/cookies";

interface ProfileState {
  credential?: CredentialModel | null
}

const initialState: ProfileState = {
}

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      loginApi.endpoints.loginInfo.matchFulfilled,
      (state, { payload }) => {
        if(payload.data === null) {
          state.credential = null;
          return;
        }

        state.credential = payload.data.credential;
        Cookies.set(COOKIES.ACCESS_TOKEN, payload.data.accessToken, { expires: 3 });
        Cookies.set(COOKIES.REFRESH_TOKEN, payload.data.refreshToken, { expires: 7 });
      }
    );

    builder.addMatcher(
      loginApi.endpoints.loginToken.matchFulfilled, 
      (state, { payload }) => {
        if(payload.data === null) {
          state.credential = null;
          return;
        }

        state.credential = payload.data.credential;
        Cookies.set(COOKIES.ACCESS_TOKEN, payload.data.accessToken, { expires: 3 });
        Cookies.set(COOKIES.REFRESH_TOKEN, payload.data.refreshToken, { expires: 7 });
      }
    )


    builder.addMatcher(
      loginApi.endpoints.loginToken.matchRejected,
      (state) => {
        state.credential = null;
        Cookies.remove(COOKIES.ACCESS_TOKEN);
        Cookies.remove(COOKIES.REFRESH_TOKEN);
      }
    )

  }
})


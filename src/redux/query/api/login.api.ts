import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../baseQuery";
import { QueryReturnType } from "@/dto/response/base";
import { LoginRequest } from "@/dto/request/login.request";
import { endPoint } from "../endPoint";
import { LoginResponse } from "@/dto/response/login";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    loginInfo: builder.mutation<QueryReturnType<LoginResponse>, LoginRequest>({
      query: (payload) => endPoint.public.loginInfo(payload)
    }),

    loginToken: builder.mutation<QueryReturnType<LoginResponse>, null>({
      query: () => endPoint.protected.loginToken()
    })
  })
})

export const {
  useLoginInfoMutation,
  useLoginTokenMutation,
} = loginApi
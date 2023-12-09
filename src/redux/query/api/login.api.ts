import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../baseQuery";
import { endPointName } from "../endPointName";
import { QueryReturnType } from "@/dto/response/base";
import { LoginRequest } from "@/dto/request/login.request";
import { endPoint } from "../endPoint";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    [`${endPointName.login.loginInfo.name}`]: builder.mutation<QueryReturnType<any>, LoginRequest>({
      query: (payload) => endPoint.public.loginInfo(payload)
    })
  })
})

export const {
  useLoginInfoMutation,
} = loginApi
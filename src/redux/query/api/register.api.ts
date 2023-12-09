import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../baseQuery";
import { endPoint } from "../endPoint";
import { RequestSendInfoRegister } from "@/dto/request/register.request";
import { endPointName } from "../endPointName";

export const registerApi = createApi({
  reducerPath: "registerApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    [`${endPointName.register.sendRegisterInfo.name}`]: builder.mutation<any, RequestSendInfoRegister>({
      query: (payload) => endPoint.public.sendInfoRegister(payload) as any,
    }),
  })
});

export const {
  useSendRegisterInfoMutation,
} = registerApi;
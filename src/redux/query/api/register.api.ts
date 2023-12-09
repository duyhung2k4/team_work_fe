import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../baseQuery";
import { endPoint } from "../endPoint";
import { RequestConfirmCodeRegister, RequestSendInfoRegister } from "@/dto/request/register.request";
import { endPointName } from "../endPointName";
import { QueryReturnType } from "@/dto/response/base";
import { SaveInfoResponse } from "@/dto/response/register.response";

export const registerApi = createApi({
  reducerPath: "registerApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    [`${endPointName.register.sendRegisterInfo.name}`]: builder.mutation<QueryReturnType<SaveInfoResponse>, RequestSendInfoRegister>({
      query: (payload) => endPoint.public.sendInfoRegister(payload) as any,
    }),
    [`${endPointName.register.confirmCodeRegister.name}`]: builder.mutation<QueryReturnType<any>, RequestConfirmCodeRegister>({
      query: (payload) => endPoint.public.confirmCodeRegister(payload) as any,
    })
  })
});

export const {
  useSendRegisterInfoMutation,
  useConfirmCodeRegisterMutation,
} = registerApi;
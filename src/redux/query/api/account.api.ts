import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../baseQuery";
import { QueryReturnType } from "@/dto/response/base";
import { AddAccountRequest, FindAccountRequest } from "@/dto/request/account.request";
import { endPoint } from "../endPoint";
import { CredentialModel } from "@/model/credential";
import { ProjectProfileModel } from "@/model/projectProfile";
import { UserProject } from "@/dto/response/project";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    findAccount: builder.mutation<QueryReturnType<CredentialModel[]>, FindAccountRequest>({
      query: (payload) => endPoint.protected.findAccount(payload)
    }),

    addAccount: builder.mutation<QueryReturnType<ProjectProfileModel[]>, AddAccountRequest>({
      query: (payload) => endPoint.protected.addAccount(payload)
    }),

    getUserProject: builder.query<QueryReturnType<UserProject[]>, number>({
      query: (payload) => endPoint.protected.getUserProject(payload)
    }),
  })
})

export const { 
  useFindAccountMutation,
  useAddAccountMutation,
  useGetUserProjectQuery,
} = accountApi;
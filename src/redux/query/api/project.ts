import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../baseQuery";
import { QueryReturnType } from "@/dto/response/base";
import { RequestCreateProject } from "@/dto/request/project.request";
import { endPoint } from "../endPoint";
import { ProjectModel } from "@/model/project";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    createProject: builder.mutation<QueryReturnType<ProjectModel>, RequestCreateProject>({
      query: (payload) => endPoint.protected.createProject(payload) as any,
    }),

    getProjectCreate: builder.query<QueryReturnType<ProjectModel[]>, null>({
      query: () => endPoint.protected.getProjectCreate(),
    }),

    getProjectJoined: builder.query<QueryReturnType<ProjectModel[]>, null>({
      query: () => endPoint.protected.getProjectJoined(),
    }),

  })
})

export const { 
  useGetProjectCreateQuery,
  useGetProjectJoinedQuery,
  useCreateProjectMutation,
} = projectApi;
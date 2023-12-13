import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../baseQuery";
import { QueryReturnType } from "@/dto/response/base";
import { AddUserTask, CreateTaskRequest, RemoveUserTask } from "@/dto/request/task.request";
import { endPoint } from "../endPoint";
import { TaskModel } from "@/model/task";
import { TaskProfileModel } from "@/model/taskProfile";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getTask: builder.query<QueryReturnType<TaskModel[]>, number>({
      query: (payload) => endPoint.protected.getTask(payload) as any,
    }),
    createTask: builder.mutation<QueryReturnType<TaskModel>, CreateTaskRequest>({
      query: (payload) => endPoint.protected.createTask(payload) as any,
    }),
    updateTask: builder.mutation<QueryReturnType<TaskModel>, TaskModel>({
      query: (payload) => endPoint.protected.updateTask(payload) as any,
    }),
    deleteTask: builder.mutation<QueryReturnType<null>, any>({
      query: (payload) => endPoint.protected.deleteTask(payload) as any,
    }),
    getAllUserTask: builder.query<QueryReturnType<TaskProfileModel[]>, null>({
      query: () => endPoint.protected.getAllUserTask() as any,
    }),
    addUserTask: builder.mutation<QueryReturnType<TaskProfileModel>, AddUserTask>({
      query: (payload) => endPoint.protected.addUserTask(payload) as any,
    }),
    removeUserTask: builder.mutation<QueryReturnType<null>, RemoveUserTask>({
      query: (payload) => endPoint.protected.removeUserTask(payload) as any,
    }),
  })
})

export const {
  useGetTaskQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
  useGetAllUserTaskQuery,
  useAddUserTaskMutation,
  useRemoveUserTaskMutation,
} = taskApi;
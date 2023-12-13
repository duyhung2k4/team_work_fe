import { ProjectModel } from "@/model/project";
import { createSlice } from "@reduxjs/toolkit";
import { projectApi } from "../query/api/project";
import { accountApi } from "../query/api/account.api";
import { UserProject } from "@/dto/response/project";

interface ProjectState {
  projectCreater: ProjectModel[]
  projectJoined: ProjectModel[],
  userOfProject: UserProject[] | null
}

const initialState: ProjectState = {
  projectCreater: [],
  projectJoined: [],
  userOfProject: null
}

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(projectApi.endpoints.getProjectCreate.matchFulfilled, (state, { payload }) => {
      if(payload.data === null) {
        return
      }
      state.projectCreater = payload.data;
    })

    builder.addMatcher(projectApi.endpoints.getProjectJoined.matchFulfilled, (state, { payload }) => {
      if(payload.data === null) {
        return
      }
      state.projectJoined = payload.data;
    })

    builder.addMatcher(accountApi.endpoints.getUserProject.matchFulfilled, (state, { payload }) => {
      state.userOfProject = payload.data || [];
    })
  }
}) 
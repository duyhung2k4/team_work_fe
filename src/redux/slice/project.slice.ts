import { ProjectModel } from "@/model/project";
import { createSlice } from "@reduxjs/toolkit";
import { projectApi } from "../query/api/project";

interface ProjectState {
  projectCreater: ProjectModel[]
  projectJoined: ProjectModel[],
}

const initialState: ProjectState = {
  projectCreater: [],
  projectJoined: [],
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
  }
}) 
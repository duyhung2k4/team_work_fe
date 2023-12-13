import { HEADER } from "@/constant/header";
import { METHOD } from "@/constant/method";
import { AddAccountRequest, FindAccountRequest } from "@/dto/request/account.request";
import { LoginRequest } from "@/dto/request/login.request";
import { RequestCreateProject } from "@/dto/request/project.request";
import { RequestConfirmCodeRegister, RequestSendInfoRegister } from "@/dto/request/register.request";
import { AxiosRequestConfig } from "axios";

export const endPoint = {
  public: {
    sendInfoRegister: (data: RequestSendInfoRegister): AxiosRequestConfig => ({
      url: "/api/v1/public/send_info",
      method: METHOD.POST,
      headers: HEADER.public(),
      data,
    }),
    confirmCodeRegister: (data: RequestConfirmCodeRegister): AxiosRequestConfig => ({
      url: "/api/v1/public/confirm_code",
      method: METHOD.POST,
      headers: HEADER.public(),
      data,
    }),
    loginInfo: (data: LoginRequest) => ({
      url: "/api/v1/public/login",
      method: METHOD.POST,
      headers: HEADER.public(),
      data,
    })
  },

  protected: {
    loginToken: () => ({
      url: "/api/v1/protected/login_token",
      method: METHOD.POST,
      headers: HEADER.protected("refresh"),
    }),

    createProject: (data: RequestCreateProject) => ({
      url: "/api/v1/protected/project/create",
      method: METHOD.POST,
      headers: HEADER.protected("query"),
      data,
    }),

    getProjectCreate: () => ({
      url: "/api/v1/protected/project/creater_id",
      method: METHOD.GET,
      headers: HEADER.protected("query"),
    }),

    getProjectJoined: () => ({
      url: "/api/v1/protected/project/joined",
      method: METHOD.GET,
      headers: HEADER.protected("query"),
    }),

    findAccount: (data: FindAccountRequest) => ({
      url: "/api/v1/protected/account/get_account",
      method: METHOD.POST,
      headers: HEADER.protected("query"),
      data,
    }),

    getUserProject: (projecyId: number) => ({
      url: `/api/v1/protected/account/get_account_project/${projecyId}`,
      method: METHOD.GET,
      headers: HEADER.protected("query"),
    }),

    addAccount: (data: AddAccountRequest) => ({
      url: "/api/v1/protected/account/add_to_project",
      method: METHOD.POST,
      headers: HEADER.protected("query"),
      data,
    })
  }
}
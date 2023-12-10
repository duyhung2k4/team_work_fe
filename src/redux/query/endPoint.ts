import { HEADER } from "@/constant/header";
import { METHOD } from "@/constant/method";
import { LoginRequest } from "@/dto/request/login.request";
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
    })
  }
}
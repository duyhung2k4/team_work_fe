import { HEADER } from "@/constant/header";
import { METHOD } from "@/constant/method";
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
    })
  }
}
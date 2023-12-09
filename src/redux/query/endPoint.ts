import { HEADER } from "@/constant/header";
import { METHOD } from "@/constant/method";
import { RequestSendInfoRegister } from "@/dto/request/register.request";
import { AxiosRequestConfig } from "axios";

export const endPoint = {
  public: {
    sendInfoRegister: (info: RequestSendInfoRegister): AxiosRequestConfig => ({
      url: "/api/v1/public/send_info",
      method: METHOD.POST,
      headers: HEADER.public(),
      data: info
    })
  }
}
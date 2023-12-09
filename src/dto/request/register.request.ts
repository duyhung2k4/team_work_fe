import { ROLE } from "@/model/role"

export interface RequestSendInfoRegister {
  username: string
  password: string
  email: string
  role: ROLE
}
import { ROLE } from "@/model/role"

export interface SaveInfoResponse {
  id: number
  email: string
  password: string
  username: string
  role: ROLE
  startAt: Date | string
  finishAt: Date | string
}
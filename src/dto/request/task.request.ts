import { STATUS } from "@/model/task"

export interface CreateTaskRequest {
  createrId: number
  projectId: number
  name: string
  level: string
  startAt: string | Date
  finishAt?: string | Date
  status: STATUS
  detail: string
}

export interface AddUserTask {
  credentialId: number
  taskId: number
}

export interface RemoveUserTask {
  credentialId: number
  taskId: number
}
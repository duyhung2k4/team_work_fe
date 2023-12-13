import { BaseModel } from "./base";
import { ProfileModel } from "./profile";
import { ProjectModel } from "./project";

export enum STATUS {
  OPEN = "open",
  CLOSE = "close",
  IN_PROCESS = "in_process",
  CANCELED = "canceled",
  WILL_BE_CHECKED = "will_be_checked",
  LOOKING_BACK = "looking_back",
}
export const STATUS_OBJECT = {
  OPEN: "Mở",
  CLOSE: "Đóng",
  IN_PROCESS: "Đang tiến hành",
  CANCELED: "Đã hủy",
  WILL_BE_CHECKED: "Sẽ được kiểm tra",
  LOOKING_BACK: "Đang xem lại",
}
export const STATUS_OBJECT_UPPER = {
  ["open"]: "Mở",
  ["close"]: "Đóng",
  ["in_process"]: "Đang tiến hành",
  ["canceled"]: "Đã hủy",
  ["will_be_checked"]: "Sẽ được kiểm tra",
  ["looking_back"]: "Đang xem lại",
}
export type STATUS_OBJECT_KEY = keyof (typeof STATUS_OBJECT);

export enum LEVEL {
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
  NONE = "none",
}
export const LEVEL_OBJECT = {
  HIGH: "Cao",
  MEDIUM: "Trung bình",
  LOW: "Thấp",
  NONE: "Không có",
}
export const LEVEL_OBJECT_UPPER = {
  ["high"]: "Cao",
  ["medium"]: "Trung bình",
  ["low"]: "Thấp",
  ["none"]: "Không có",
}
export type LEVEL_OBJECT_KEY = keyof (typeof LEVEL_OBJECT);

export interface TaskModel extends BaseModel {
  createrId: number
  projectId: number
  name: string
  level: LEVEL
  startAt: string | Date
  finishAt: string | Date
  status: STATUS
  detail: string
  
  creater?: ProfileModel
  project?: ProjectModel
}
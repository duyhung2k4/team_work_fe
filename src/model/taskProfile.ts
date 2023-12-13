import { BaseModel } from "./base";
import { ProfileModel } from "./profile";
import { TaskModel } from "./task";

export interface TaskProfileModel extends BaseModel {
  taskId: number
  implementerId: number
  task?: TaskModel
  implementer?: ProfileModel
}
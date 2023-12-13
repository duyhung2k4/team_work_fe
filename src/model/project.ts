import { BaseModel } from "./base";
import { ProfileModel } from "./profile";

export interface ProjectModel extends BaseModel {
  createrId: number
  name: string
  code: string

  creater?: ProfileModel
}
import { BaseModel } from "./base";
import { ProfileModel } from "./profile";
import { ProjectModel } from "./project";

export interface ProjectProfileModel extends BaseModel {
  projectId: number
  profileId: number

  project?: ProjectModel
  profile?: ProfileModel
}
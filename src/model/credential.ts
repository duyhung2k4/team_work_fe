import { BaseModel } from "./base";
import { ProfileModel } from "./profile";
import { RoleModel } from "./role";

export interface CredentialModel extends BaseModel {
  roleId: number
  profileId: number
  username: string
  email: string
  password: string

  role?: RoleModel
  profile?: ProfileModel
}
import { BaseModel } from "./base";

export enum ROLE {
  ADMIN = "admin",
  USER = "user",
}

export interface RoleModel extends BaseModel {
  code: ROLE
  name: string
}
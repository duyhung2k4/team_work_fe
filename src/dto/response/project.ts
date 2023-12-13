import { CredentialModel } from "@/model/credential"
import { ProjectProfileModel } from "@/model/projectProfile"

export interface UserProject {
  credential: CredentialModel
  projectProfile: ProjectProfileModel
}
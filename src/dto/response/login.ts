import { CredentialModel } from "@/model/credential"

export interface LoginResponse {
  accessToken: string
  refreshToken: string
  credential: CredentialModel
}
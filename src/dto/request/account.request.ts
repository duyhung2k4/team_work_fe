export interface FindAccountRequest {
  username: string
  email: string
}

export interface AddAccountRequest {
  projectId: number
  createrProjectId: number
  joinedId: number
}
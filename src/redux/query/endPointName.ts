export enum TYPE_API {
  mutation = "mutations",
  query = "queries",
}

export enum END_POINT_NAME {
  REGISTER_SEND_REGISTER_INFO = "sendRegisterInfo",
  REGISTER_CONFIRM_CODE = "confirmCodeRegister",

  LOGIN_INFO = "loginInfo",
  LOGIN_TOKEN = "loginToken",

  PROJECT_CREATE = "createProject",
  PROJECT_GET_CREATE = "getProjectCreate",
  PROJECT_GET_JOINED = "getProjectJoined"
}

export enum STATUS {
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
  NULL = "null"
}

export const endPointName = {
  register: {
    sendRegisterInfo: { name: END_POINT_NAME.REGISTER_SEND_REGISTER_INFO, type: TYPE_API.mutation },
    confirmCodeRegister: { name: END_POINT_NAME.REGISTER_CONFIRM_CODE, type: TYPE_API.mutation },
  },
  login: {
    loginInfo: { name: END_POINT_NAME.LOGIN_INFO, type: TYPE_API.mutation },
    loginToken: { name: END_POINT_NAME.LOGIN_TOKEN, type: TYPE_API.mutation },
  },
  project: {
    createProject: { name: END_POINT_NAME.PROJECT_CREATE, type: TYPE_API.mutation },
    getProjectCreate: { name: END_POINT_NAME.PROJECT_GET_CREATE, type: TYPE_API.mutation },
    getProjectJoined: { name: END_POINT_NAME.PROJECT_GET_JOINED, type: TYPE_API.mutation },
  }
}
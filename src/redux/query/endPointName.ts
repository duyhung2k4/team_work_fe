export enum TYPE_API {
  mutation = "mutations",
  query = "queries",
}

export enum END_POINT_NAME {
  REGISTER_SEND_REGISTER_INFO = "sendRegisterInfo",
  REGISTER_CONFIRM_CODE = "confirmCodeRegister",

  LOGIN_INFO = "loginInfo",
  LOGIN_TOKEN = "loginToken"
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
  }
}
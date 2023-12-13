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
  PROJECT_GET_JOINED = "getProjectJoined",
  PROJECT_GET_CREATE_DETAIL = "getProjectCreateDetail",
  PROJECT_GET_JOINED_DETAIL = "getProjectJoinedDetail",

  ACCOUNT_FIND_ACCOUNT = "findAccount",
  ACCOUNT_ADD_ACCOUNT = "addAccount",
  ACCOUNT_GET_USER_PROJECT = "getUserProject",

  TASK_GET = "getTask",
  TASK_CREATE = "createTask",
  TASK_UPDATE = "updateTask",
  TASK_DELETE = "deleteTask",
  TASK_ADD_USER = "addUserTask",
  TASK_REMOVE_USER = "removeUserTask",
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
    getProjectCreate: { name: END_POINT_NAME.PROJECT_GET_CREATE, type: TYPE_API.query },
    getProjectJoined: { name: END_POINT_NAME.PROJECT_GET_JOINED, type: TYPE_API.query },
    getProjectCreateDetail: { name: END_POINT_NAME.PROJECT_GET_CREATE_DETAIL, type: TYPE_API.query },
    getProjectJoinedDetail: { name: END_POINT_NAME.PROJECT_GET_JOINED_DETAIL, type: TYPE_API.query },
  },
  account: {
    findAccount: { name: END_POINT_NAME.ACCOUNT_FIND_ACCOUNT, type: TYPE_API.mutation },
    addAccount: { name: END_POINT_NAME.ACCOUNT_ADD_ACCOUNT, type: TYPE_API.mutation },
    getUserProject: { name: END_POINT_NAME.ACCOUNT_GET_USER_PROJECT, type: TYPE_API.mutation },
  },
  task: {
    getTask: { name: END_POINT_NAME.TASK_GET, type: TYPE_API.query },
    createTask: { name: END_POINT_NAME.TASK_CREATE, type: TYPE_API.mutation },
    updateTask: { name: END_POINT_NAME.TASK_UPDATE, type: TYPE_API.mutation },
    deleteTask: { name: END_POINT_NAME.TASK_DELETE, type: TYPE_API.mutation },
    addUserTask: { name: END_POINT_NAME.TASK_ADD_USER, type: TYPE_API.mutation },
    removeUserTask: { name: END_POINT_NAME.TASK_REMOVE_USER, type: TYPE_API.mutation },
  }
}
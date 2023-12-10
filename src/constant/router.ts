export const ROUTER = {
  PUBLIC: {
    LOGIN: {
      INDEX: "/login",
    },
    REGISTER: {
      INDEX: "/register"
    },
    CONFIRM_CODE_REGISTER: {
      INDEX: "/confirm_code_register"   
    }
  },
  PROTECTED: {
    DEFAULT: {
      INDEX: "/"
    },
    DASHBOARD: {
      INDEX: "/dashboard"
    }
  }
}
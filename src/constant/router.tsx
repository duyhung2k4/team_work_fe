import { IconArrowsJoin, IconLayoutDashboard, IconUser } from "@tabler/icons-react"

export const ROUTER = {
  PUBLIC: {
    LOGIN: {
      INDEX: "/login"
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
      INDEX: "/",
    },
    DASHBOARD: {
      INDEX: "/dashboard"
    },
    PROJECT_JOINED: {
      INDEX: "/project_joined"
    },
    MY_PROJECT: {
      INDEX: "/my_project"
    }
  }
}

export type KeyRouterProtected = "DASHBOARD" | "PROJECT_JOINED" | "MY_PROJECT" | "DEFAULT";
export interface PropKeyRouterProtected {
  INDEX: string
}


export type KeyMenuRouter = "DASHBOARD" | "PROJECT_JOINED" | "MY_PROJECT";
export interface PropKeyMenuRouter {
  INDEX: string
  NAME: string
  ICON: React.ReactNode
}
export const MENU_ROUTER: Record<KeyMenuRouter, PropKeyMenuRouter> = {
  DASHBOARD: {
    INDEX: ROUTER.PROTECTED.DASHBOARD.INDEX,
    NAME: "Tổng quan",
    ICON: <IconLayoutDashboard/>
  },
  PROJECT_JOINED: {
    INDEX: ROUTER.PROTECTED.PROJECT_JOINED.INDEX,
    NAME: "Dự án tham gia",
    ICON: <IconArrowsJoin/>
  },
  MY_PROJECT: {
    INDEX: ROUTER.PROTECTED.MY_PROJECT.INDEX,
    NAME: "Dự án đã tạo",
    ICON: <IconUser/>
  }
}
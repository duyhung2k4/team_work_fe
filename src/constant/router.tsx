import { 
  IconClipboardList, 
  IconLayoutDashboard,
} from "@tabler/icons-react"

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
    PROJECT: {
      INDEX: "/project"
    },
    TASK: {
      INDEX: "/project/:project_id/task"
    }
  }
}

export type KeyRouterProtected = "DASHBOARD" | "PROJECT" | "DEFAULT" | "TASK";
export interface PropKeyRouterProtected {
  INDEX: string
}


export type KeyMenuRouter = "DASHBOARD" | "PROJECT";
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
  PROJECT: {
    INDEX: ROUTER.PROTECTED.PROJECT.INDEX,
    NAME: "Dự án",
    ICON: <IconClipboardList/>
  },
}
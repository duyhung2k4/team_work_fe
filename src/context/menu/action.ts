export enum AppMenuTypes {
  OPEN_MENU = "OPEN_MENU",
  CLOSE_MENU = "CLOSE_MENU",
  PENDING_MENU = "PENDING_MENU",

  SET_PATHNAME = "SET_PATHNAME",
}

export type AppMenuCloseMenu = {
  type: AppMenuTypes.CLOSE_MENU
}

export type AppMenuOpenMenu = {
  type: AppMenuTypes.OPEN_MENU
}

export type AppMenuPendingMenu = {
  type: AppMenuTypes.PENDING_MENU
}

export type AppMenuPathName = {
  type: AppMenuTypes.SET_PATHNAME
  payload: string
}

export type AppMenuAction = 
  | AppMenuPendingMenu
  | AppMenuOpenMenu
  | AppMenuCloseMenu
  | AppMenuPathName;
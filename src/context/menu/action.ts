export enum AppMenuTypes {
  OPEN_MENU = "OPEN_MENU",
  CLOSE_MENU = "CLOSE_MENU",
  PENDING_MENU = "PENDING_MENU"
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

export type AppMenuAction = 
  | AppMenuPendingMenu
  | AppMenuOpenMenu
  | AppMenuCloseMenu;
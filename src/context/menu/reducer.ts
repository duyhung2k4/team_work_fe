import { AppMenuAction, AppMenuTypes } from "./action";

export type StatusMenu = "open" | "close" | "pending_set";
export interface MenuState {
  status: StatusMenu
}

export const initMenuState: MenuState = {
  status: "pending_set"
}

export const appMenuReducer = (state: MenuState = initMenuState, action: AppMenuAction) => {
  switch(action.type) {
    case AppMenuTypes.CLOSE_MENU:
      state = {
        ...state,
        status: "close",
      }
      break
    case AppMenuTypes.OPEN_MENU:
      state = {
        ...state,
        status: "open"
      }
      break
    case AppMenuTypes.PENDING_MENU:
      state = {
        ...state,
        status: "pending_set",
      }
      break
    default:
      state = {...state};
      break
  }

  return state;
}
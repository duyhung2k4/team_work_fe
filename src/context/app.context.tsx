import React, { createContext, useReducer } from "react";
import { AppMenuAction } from "./menu/action";
import { MenuState, appMenuReducer, initMenuState } from "./menu/reducer";

export type AppContextState = {
  menu: MenuState
}
const initialState: AppContextState = {
  menu: initMenuState,
}


export const Context = createContext<{
  state: AppContextState,
  dispatch: React.Dispatch<AppMenuAction>
}>({
  state: initialState,
  dispatch: () => null
});


type MergeAction = AppMenuAction;
const reducer = (state: AppContextState, action: MergeAction) => ({
  menu: appMenuReducer(state.menu, action)
})




interface AppContextProp {
  children: React.ReactNode
}
const AppContext: React.FC<AppContextProp> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  )
}

export default AppContext;
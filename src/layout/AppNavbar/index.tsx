import React, { useContext, useEffect } from "react";
import HeaderApp from "./Header";
import FooterApp from "./Footer";
import Loading from "../Loading";
import ContentApp from "./Content";
import AppNavbarMenu from "./Menu";

import { Context } from "@/context/app.context";
import { useScreen } from "@/hook/useScreen";
import { AppMenuTypes } from "@/context/menu/action";
import { stylesAppNavbar } from "./styles";
import { Box, Group, Stack } from "@mantine/core";
import MenuMobile from "./MenuMobile";


export interface AppNavbarProps {
  children: React.ReactNode
}
const AppNavbar: React.FC<AppNavbarProps> = (props) => {
  const { state, dispatch } = useContext(Context);
  const { width } = useScreen();
  const { classes } = stylesAppNavbar({ status: state.menu.status, width: width });



  useEffect(() => {
    dispatch({
      type: width > 1200 ? AppMenuTypes.OPEN_MENU : AppMenuTypes.CLOSE_MENU
    })
    dispatch({
      type: AppMenuTypes.SET_PATHNAME,
      payload: window.location.pathname,
    })
  }, [width]);



  if (state.menu.status === "pending_set") {
    return <Loading />
  }

  return (
    <Group spacing={0} className={classes.root}>
      {
        width > 600 ?
          <Box className={classes.navbar}>
            <AppNavbarMenu />
          </Box>
          : <MenuMobile />
      }
      <Stack spacing={0} className={classes.content}>
        <HeaderApp />
        <ContentApp>
          {props.children}
        </ContentApp>
        <FooterApp />
      </Stack>
    </Group>
  )
}

export default AppNavbar;
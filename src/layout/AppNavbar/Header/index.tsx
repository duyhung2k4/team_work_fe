import React, { useContext } from "react";
import { Box, Group, Text } from "@mantine/core";
import { stylesHeader } from "./styles";
import { useScreen } from "@/hook/useScreen";
import { IconMenu2, IconUserCircle } from "@tabler/icons-react";
import { Context } from "@/context/app.context";
import { KeyMenuRouter, MENU_ROUTER } from "@/constant/router";
import { AppMenuTypes } from "@/context/menu/action";

const HeaderApp: React.FC = () => {
  const { state, dispatch } = useContext(Context);
  const { width } = useScreen();
  const { classes, theme } = stylesHeader(width);
  
  let nameOption = "";
  Object.keys(MENU_ROUTER).forEach((key: string) => {
    const keyConvert = key as KeyMenuRouter;
    if(state.menu.pathname === MENU_ROUTER[keyConvert].INDEX) {
      nameOption = MENU_ROUTER[keyConvert].NAME;
    }
  });

  const handleOpenMenu = () => {
    dispatch({
      type: AppMenuTypes.OPEN_MENU
    })
  }
  
  return (
    <Group 
      className={classes.root}
      position="apart"
    >
      <Box
        sx={{
          display: width > 600 ? "none" : undefined,
          ":hover": {
            color: theme.colors.orange[5],
          },
          cursor: "pointer"
        }}
        onClick={handleOpenMenu}
      >
        <IconMenu2/>
      </Box>
      <Text>{nameOption}</Text>
      <Box>
        <IconUserCircle 
          style={{ 
            display: width > 600 ? undefined : "none" 
          }} 
        />
      </Box>
    </Group>
  )
}

export default HeaderApp;
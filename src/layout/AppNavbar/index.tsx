import { Box, Group, Stack } from "@mantine/core";
import React from "react";
import AppNavbarMenu from "./Menu";
import HeaderApp from "./Header";
import ContentApp from "./Content";
import FooterApp from "./Footer";
import { stylesAppNavbar } from "./styles";

export interface AppNavbarProps {
  children: React.ReactNode
}
const AppNavbar: React.FC<AppNavbarProps> = (props) => {
  const { classes } = stylesAppNavbar();

  return (
    <Group spacing={0} className={classes.root}>
      <Box className={classes.navbar}>
        <AppNavbarMenu />
      </Box>
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
import { Stack } from "@mantine/core";
import React from "react";
import { styleMenu } from "./styles";

const AppNavbarMenu: React.FC = () => {
  const { classes } = styleMenu();
  return (
    <Stack className={classes.root}>
      <div>Option 1</div>
      <div>Option 2</div>
      <div>Option 3</div>
    </Stack>
  )
}

export default AppNavbarMenu;
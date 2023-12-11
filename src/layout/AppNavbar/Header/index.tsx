import { Group } from "@mantine/core";
import React from "react";
import { stylesHeader } from "./styles";

const HeaderApp: React.FC = () => {
  const { classes } = stylesHeader();

  return (
    <Group className={classes.root}>
      Header
    </Group>
  )
}

export default HeaderApp;
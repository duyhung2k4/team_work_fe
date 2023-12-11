import { Group } from "@mantine/core";
import React from "react";
import { stylesFooter } from "./styles";

const FooterApp: React.FC = () => {
  const { classes } = stylesFooter();

  return (
    <Group className={classes.root}>
      Footer
    </Group>
  )
}

export default FooterApp;
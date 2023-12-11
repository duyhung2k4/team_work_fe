import { Box, Stack } from "@mantine/core";
import React from "react";
import { stylesContent } from "./styles";

export interface ContentProps {
  children: React.ReactNode
}
const ContentApp: React.FC<ContentProps> = (props) => {
  const { classes } = stylesContent();

  return (
    <Box className={classes.root}>
      <Stack 
        className={classes.content}
        pos={"relative"}
      >
        {props.children}
      </Stack>
    </Box>
  )
}

export default ContentApp;
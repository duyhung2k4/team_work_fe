import { Box, Stack } from "@mantine/core";
import React from "react";
import { stylesContent } from "./styles";
import { useScreen } from "@/hook/useScreen";

export interface ContentProps {
  children: React.ReactNode
}
const ContentApp: React.FC<ContentProps> = (props) => {
  const { width } = useScreen();
  const { classes } = stylesContent(width);

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
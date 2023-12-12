import { Box, Group } from "@mantine/core";
import React from "react";
import { stylesFooter } from "./styles";
import { useScreen } from "@/hook/useScreen";
import { IconUserCircle } from "@tabler/icons-react";
import { SIZE_ICON_MENU } from "@/constant/screen";

const FooterApp: React.FC = () => {
  const { width } = useScreen();
  const { classes } = stylesFooter(width);

  return (
    <Group
      className={classes.root}
      position="apart"
      spacing={0}
    >
      <Box
        style={{
          width: `calc(100% - ${SIZE_ICON_MENU}px)`,
          height: "100%",
        }}
      ></Box>
      <Box className={classes.userIcon}>
        <IconUserCircle
          style={{
            display: width > 600 ? "none" : undefined,
            cursor: "pointer",
          }}
        />
      </Box>
    </Group>
  )
}

export default FooterApp;
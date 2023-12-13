import { Box, Group } from "@mantine/core";
import React, { useState } from "react";
import { stylesFooter } from "./styles";
import { useScreen } from "@/hook/useScreen";
import { IconUserCircle } from "@tabler/icons-react";
import { SIZE_ICON_MENU } from "@/constant/screen";
import { DrawerAccountInfo } from "../DrawerInfo";

const FooterApp: React.FC = () => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
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
          onClick={() => setShowInfo(true)}
        />
      </Box>

      <DrawerAccountInfo
        opened={showInfo}
        setStatus={setShowInfo}
      />
    </Group>
  )
}

export default FooterApp;
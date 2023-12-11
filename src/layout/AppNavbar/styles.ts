import { MENU_SIZE } from "@/constant/screen";
import { createStyles } from "@mantine/core";

export const stylesAppNavbar = createStyles(() => {
  return {
    root: {
      height: "100vh",
      width: "100%",
      overflow: "hidden",
    },
    content: {
      width: `calc(100vw - ${MENU_SIZE.OPEN}px)`,
      height: "100vh",
    },
    navbar: {
      height: "100vh",
      width: MENU_SIZE.OPEN,
    }
  }
})
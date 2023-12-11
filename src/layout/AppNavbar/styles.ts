import { MENU_SIZE } from "@/constant/screen";
import { StatusMenu } from "@/context/menu/reducer";
import { createStyles } from "@mantine/core";

export const stylesAppNavbar = createStyles((_, status: StatusMenu) => {
  const sizeNavbar = status === "open" ? MENU_SIZE.OPEN : MENU_SIZE.CLOSE;
  return {
    root: {
      height: "100vh",
      width: "100%",
      overflow: "hidden",
    },
    content: {
      width: `calc(100vw - ${sizeNavbar}px)`,
      height: "100vh",
      transition: "width 200ms",
    },
    navbar: {
      height: "100vh",
      width: sizeNavbar, 
      transition: "width 200ms",
    }
  }
})
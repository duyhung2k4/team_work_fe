import { MENU_SIZE } from "@/constant/screen";
import { StatusMenu } from "@/context/menu/reducer";
import { createStyles } from "@mantine/core";

interface stylesAppNavbarProps {
  status: StatusMenu
  width: number
}
export const stylesAppNavbar = createStyles((theme, props: stylesAppNavbarProps) => {
  let sizeNavbar = props.status === "open" ? MENU_SIZE.OPEN : MENU_SIZE.CLOSE;

  if(props.width <= 600) {
    sizeNavbar = 0;
  }


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
      paddingRight: sizeNavbar > 0 ? 20 : 0,
      backgroundColor: theme.colors["dark-blue"][5],
    },
    navbar: {
      height: "100vh",
      width: sizeNavbar, 
      transition: "width 200ms",
    }
  }
})
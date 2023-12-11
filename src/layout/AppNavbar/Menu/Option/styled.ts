import { SIZE_ICON_MENU, SPACING_ICON_WIDTH_NAME_OPTION } from "@/constant/screen";
import { createStyles } from "@mantine/core";

export const styleMenuOption = createStyles((theme) => {
  return {
    root: {
      display: "flex",
      height: "100%",
      flexDirection: "row",
      justifyContent: "left",
      cursor: "pointer",
      ":hover": {
        color: theme.colors.orange[5],
        "& svg": {
          color: `${theme.colors.orange[5]} !important`,
        }
      }
    },
    name: {
      fontSize: 16,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: `calc(100% - ${SIZE_ICON_MENU + SPACING_ICON_WIDTH_NAME_OPTION}px)`,
      transition: "200ms",
      textDecoration: "none",
      color: theme.colors.info[1],
      ":hover": {
        color: `${theme.colors.orange[5]} !important`,  
      }
    },
    active: {
      color: `${theme.colors.orange[5]} !important`,
      "& svg": {
        color: `${theme.colors.orange[5]} !important`,
      }
    },
    icon: {
      cursor: "pointer",
      color: "#96AAE0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: SIZE_ICON_MENU,
      width: SIZE_ICON_MENU,
    }
  }
})
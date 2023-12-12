import { createStyles } from "@mantine/core";

export const styleMenuMobileStyle = createStyles((theme) => {
  return {
    root: {
      width: "100%",
      backgroundColor: theme.colors["dark-blue"][5],
      height: "100vh",
      color: theme.colors.white[0],
      boxSizing: "border-box",
      WebkitBoxSizing: "border-box",
      MozBoxSizing: "border-box",
      paddingTop: 8,

      "& .mantine-Drawer-header": {
        display: "none"
      },
      "& .mantine-Drawer-body": {
        overflow: "hidden",
        padding: "0px !important",
        "&.mantine-Stack-root": {
          padding: "0px !important",
        }
      },
    },
    body: {
      padding: `0px !important`,
    },
    close: {
      display: "none",
    },
    control: {
      padding: 8,
      paddingLeft: 16,
    },
    icon: {
      cursor: "pointer",
      color: "#96AAE0",
      ":hover": {
        color: theme.colors.orange[5]
      }
    },
    menu: {
      padding: 8,
      color: "#96AAE0",
      paddingLeft: 16,
    },
    option: {
      cursor: "pointer",
      ":hover": {
        color: theme.colors.orange[5],
      }
    },
    header: {
      display: "none"
    }
  }
})
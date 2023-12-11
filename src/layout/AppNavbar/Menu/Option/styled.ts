import { createStyles } from "@mantine/core";

export const styleMenuOption = createStyles((theme) => {
  return {
    root: {
      cursor: "pointer",
      ":hover": {
        color: theme.colors.orange[5],
      }
    },
    name: {
      fontSize: 16,
    },
    icon: {
      cursor: "pointer",
      color: "#96AAE0",
      ":hover": {
        color: theme.colors.orange[5]
      }
    }
  }
})
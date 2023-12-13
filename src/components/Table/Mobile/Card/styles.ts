import { createStyles } from "@mantine/core";

export const styleTableScreenMobileCard = createStyles((theme) => {
  return {
    root: {
      borderRadius: 8,
      border: "1px solid gray",
    },
    content: {
      backgroundColor: theme.colors["dark-blue"][5],
      padding: 8,
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      color: "white",
      fontWeight: 600,
      height: 30,
    }
  }
})
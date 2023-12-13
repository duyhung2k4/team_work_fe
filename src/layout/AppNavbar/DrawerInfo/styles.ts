import { createStyles } from "@mantine/core";

export const styleDrawerInfo = createStyles((theme) => {
  return {
    header: {
      display: "none"
    },
    body: {
      padding: `0px !important`,
      backgroundColor: theme.colors["dark-blue"][5],
    },
  }
})
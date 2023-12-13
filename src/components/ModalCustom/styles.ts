import { createStyles } from "@mantine/core";

export const styleModel = createStyles((theme, width: number) => {
  const borderRadius = width > 600 ? 8 : 0;
  return {
    root: {
      borderRadius: borderRadius,
    },
    content: {
      borderRadius: borderRadius,
    },
    header: {
      backgroundColor: theme.colors["dark-blue"][5],
      borderTopLeftRadius: borderRadius,
      borderTopRightRadius: borderRadius,
      "& .mantine-ActionIcon-root": {
        ":hover": {
          backgroundColor: theme.colors["dark-blue"][5],
        }
      },
      color: theme.colors.white[0],
    },
    body: {
      padding: `16px !important`,
    },
    inner: {
      paddingLeft: "0px !important",
      paddingRight: "0px !important",
    }
  }
})
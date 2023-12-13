import { HEIGHT_HEADER } from "@/constant/screen";
import { createStyles } from "@mantine/core";

export const styleDrawerCustom = createStyles((theme) => {
  return {
    header: {
      color: theme.colors.white[0],
      backgroundColor: theme.colors["dark-blue"][5],
      height: HEIGHT_HEADER,
      paddingTop: 0,
      paddingBottom: 0,
      "& .mantine-ActionIcon-root": {
        ":hover": {
          backgroundColor: theme.colors["dark-blue"][5],
        }
      }
    },
    body: {
      paddingTop: `20px !important`,
      minHeight: `calc(100% - ${HEIGHT_HEADER}px)`,
      boxSizing: "border-box",
      WebkitBoxSizing: "border-box",
      MozBoxSizing: "border-box"
    }
  }
})
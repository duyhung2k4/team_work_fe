import { HEIGHT_HEADER } from "@/constant/screen";
import { createStyles } from "@mantine/core";

export const styleMenu = createStyles((theme) => {
  return {
    root: {
      width: "100%",
      backgroundColor: theme.colors["dark-blue"][5],
      height: "100vh",
      color: theme.colors.white[0],
      boxSizing: "border-box",
      WebkitBoxSizing: "border-box",
      MozBoxSizing: "border-box",
      paddingTop: HEIGHT_HEADER,
    }
  }
})
import { HEIGHT_FOOTER, HEIGHT_HEADER } from "@/constant/screen";
import { createStyles } from "@mantine/core";

export const stylesContent = createStyles((theme, width: number) => {
  return {
    root: {
      height: `calc(100vh - ${HEIGHT_FOOTER + HEIGHT_HEADER}px)`,
      backgroundColor: theme.colors["dark-blue"][5],
      boxSizing: "border-box",
      WebkitBoxSizing: "border-box",
      MozBoxSizing: "border-box",
    },
    content: {
      height: "100%",
      width: "100%",
      borderRadius: width > 600 ? 16 : 0,
      padding: 16,
      backgroundColor: theme.colors.white[0],
      boxSizing: "border-box",
      WebkitBoxSizing: "border-box",
      MozBoxSizing: "border-box",
    }
  }
})
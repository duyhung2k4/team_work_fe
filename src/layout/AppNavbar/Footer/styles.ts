import { HEIGHT_FOOTER } from "@/constant/screen";
import { createStyles } from "@mantine/core";

export const stylesFooter = createStyles((theme, width: number) => {
  return {
    root: {
      height: HEIGHT_FOOTER,
      backgroundColor: theme.colors["dark-blue"][5],
      color: theme.colors.white[0],
      padding: width > 900 ? 0 : `0px 16px`,
    },
    userIcon: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      ":hover": {
        color: theme.colors.orange[5],
      }
    }
  }
})
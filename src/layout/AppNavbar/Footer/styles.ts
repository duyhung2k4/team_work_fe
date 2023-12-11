import { HEIGHT_FOOTER } from "@/constant/screen";
import { createStyles } from "@mantine/core";

export const stylesFooter = createStyles((theme) => {
  return {
    root: {
      height: HEIGHT_FOOTER,
      backgroundColor: theme.colors["dark-blue"][5],
      color: theme.colors.white[0],
    }
  }
})
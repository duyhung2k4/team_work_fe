import { HEIGHT_HEADER } from "@/constant/screen";
import { createStyles } from "@mantine/core";

export const stylesHeader = createStyles((theme) => {
  return {
    root: {
      height: HEIGHT_HEADER,
      backgroundColor: theme.colors["dark-blue"][5],
      color: theme.colors.white[0],
    }
  }
})
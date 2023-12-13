import { createStyles } from "@mantine/core";

export const styleTask = createStyles(() => {
  return {
    root: {
      height: "100%",
    },
    tabRightSection: {
      transition: "200ms",
    },
    tab: {
      transition: "200ms",
    },
    panel: {
      height: `calc(100% - ${34}px)`,
    },
    tabsList: {
      height: 34,
    }
  }
})
import { MantineThemeOverride } from "@mantine/core";

export const themeGlobal: MantineThemeOverride = {
  colors: {
    success: [
      "#b8e5ba",
      "#a6dea9",
      "#95d898",
      "#83d187",
      "#71cb76",
      "#60c465",
      "#4ebe54",
      "#42b247",
      "#3ba040",
      "#358f39",
    ],
    error: [
      "#D32F2F",
      "#d43434",
      "#d53939",
      "#d63f3f",
      "#d74444",
      "#d94949",
      "#da4e4e",
      "#db5353",
      "#dc5959",
    ],
    info: [
      "#BDCAF2",
      "#96AAE0",
      "#80d1fe",
      "#6bcafe",
      "#56c2fd",
      "#41bbfd",
      "#2bb3fd",
      "#16abfd",
      "#02a4fb",
      "#0296e6",
    ],
    "dark-blue": [
      "#DBE4FF",
      "#5875CD",
      "#3C5EC4",
      "#3351A9",
      "#2A438D",
      "#1B3276",
      "#223671",
      "#1B2B5A",
      "#18264F",
      "#142044",
    ],
    secondary: [
      "#FFEAE0",
      "#F7A37D",
      "#F69367",
      "#F58451",
      "#F3743C",
      "#EE530E",
      "#F26526",
      "#D34A0D",
      "#B9410B",
      "#9F3809",
    ],
    white: [
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
    ],
  },
  components: {
    InputWrapper: {
      styles: {
        root: {
          height: 40,
        },
        label: {
          marginBottom: "2px",
          display: "block",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          textAlign: "left",
        },
        error: {
          marginBottom: "5px",
        },
      },
    },
    Input: {
      styles: {
        wrapper: {
          height: 40,
        },
        input: {
          borderRadius: "8px !important",
          height: 40,
        },
      }
    },
    PasswordInput: {
      styles: {
        innerInput: {
          height: 40,
        }
      }
    },
    Button: {
      styles: {
        root: {
          backgroundColor: "#1B3276",
          borderRadius: 8,
          height: 40,
          ":hover": {
            backgroundColor: "#1B3276"
          }
        }
      }
    }
  },
}
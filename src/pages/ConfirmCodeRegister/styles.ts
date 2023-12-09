import { createStyles } from "@mantine/core";

export const styleComfirmCodeRegister = createStyles((theme) => {
  return {
    root: {
      backgroundColor: theme.colors["dark-blue"][5],
      height: "100%",
    },
    message: {
      color: theme.colors.error[0],
      textAlign: "center",
      width: "100%",
      marginTop: 24,
    },
    title: {
      width: "100%",
      textAlign: "center",
      fontSize: 32,
      color: theme.colors["dark-blue"][5],
      fontWeight: 600,
      textTransform: "uppercase",
      marginBottom: 20,
    },
    boxInputCode: {
      "& input": {
        textAlign: "center",
      }
    },
    form: {
      borderRadius: 30,
      backgroundColor: theme.colors.info[0],
      padding: 60,
      minWidth: 400,
      "& .mantine-Button-root": {
        textTransform: "uppercase"
      },
    }
  }
})
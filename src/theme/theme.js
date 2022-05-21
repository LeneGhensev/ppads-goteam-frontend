import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#44CCB3",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#44CCB3",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#2B65D9",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#F28705",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#F205B3",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["Open-Sans", "sans-serif"].join(", "),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
      },
    },
  },
});

export default theme;

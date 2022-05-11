import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#44CCB3",
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

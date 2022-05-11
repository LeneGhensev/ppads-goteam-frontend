import React from "react";
import { useLocation } from "react-router";
import { ThemeProvider } from "@mui/material/styles";

import { UserContextProvider } from "./contexts/UserContext";
import Routes from "./pages/routes/routes";
import Cabecalho from "./components/cabecalho/Cabecalho";

import theme from "./theme/theme";

function App() {
  const location = useLocation();

  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        {location.pathname !== "/login" && <Cabecalho />}

        <Routes />
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;

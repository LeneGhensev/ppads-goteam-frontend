import React from "react";
import { useLocation } from "react-router";
import { ThemeProvider } from "@mui/material/styles";

import { UserContextProvider } from "./contexts/UserContext";
import { ToastContextProvider } from "./contexts/ToastContext";

import Routes from "./pages/routes/routes";
import Cabecalho from "./components/cabecalho/Cabecalho";

import theme from "./theme/theme";

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <ToastContextProvider>
        <UserContextProvider>
          {location.pathname !== "/login" && <Cabecalho />}

          <Routes />
        </UserContextProvider>
      </ToastContextProvider>
    </ThemeProvider>
  );
}

export default App;

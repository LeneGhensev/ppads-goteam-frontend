import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import { UserContextProvider } from "./contexts/UserContext";

import theme from "./theme/theme";

import Routes from "./pages/routes/routes";
import Cabecalho from "./components/cabecalho/Cabecalho";

function App() {
  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Cabecalho />
          <Routes />
        </Router>
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;

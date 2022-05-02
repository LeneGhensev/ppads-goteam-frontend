import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme/theme";

import Routes from "./pages/routes";
import Cabecalho from "./components/cabecalho/Cabecalho";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Cabecalho />
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;

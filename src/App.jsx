import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./pages/routes";
import Cabecalho from "./components/cabecalho/Cabecalho";

function App() {
  return (
    <Router>
      <Cabecalho />
      <Routes />
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import CadastroGames from "./pages/cadastroBrowserGames/CadastroGames";
import Page404 from "./pages/404/Page404";
import NovoGame from "./pages/cadastroBrowserGames/NovoGame";

// import Cabecalho from "./components/cabecalho/Cabecalho";

function App() {
  return (
    <BrowserRouter>
      {/* <Cabecalho /> */}

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/cadastroGames" element={<CadastroGames />} />

        <Route path="/cadastroGames/novoGame" element={<NovoGame />} />

        <Route path="/cadastroGames/editarGame" element={<CadastroGames />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

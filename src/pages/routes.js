import React from "react";
import { Routes, Route } from "react-router-dom";

import ListagemGames from "./cadastroBrowserGames/ListagemGames";
import Page404 from "../pages/404/Page404";
import CadastroGame from "./cadastroBrowserGames/CadastroGame";

export default function GoodBrowserGamesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ListagemGames />} />
      <Route path="/cadastroGames/novoGame" element={<CadastroGame />} />
      <Route path="/cadastroGames/editarGame/:id" element={<CadastroGame />} />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

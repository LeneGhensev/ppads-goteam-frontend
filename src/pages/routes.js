import React from "react";
import { Routes, Route } from "react-router-dom";

import ListagemGames from "./cadastroBrowserGames/ListagemGames";
import Page404 from "../pages/404/Page404";
import CadastroGame from "./cadastroBrowserGames/CadastroGame";
import ListagemCategorias from "./cadastroCategorias/ListagemCategorias";

export default function GoodBrowserGamesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ListagemGames />} />
      <Route path="/cadastroGames/novoGame" element={<CadastroGame />} />
      <Route path="/cadastroGames/editarGame/:id" element={<CadastroGame />} />

      <Route path="/cadastroCategorias" element={<ListagemCategorias />} />
      <Route
        path="/cadastroCategorias/novaCategoria"
        element={<ListagemCategorias />}
      />
      <Route
        path="/cadastroCategorias/editarCategoria/:id"
        element={<ListagemCategorias />}
      />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import ListagemGames from "./cadastroBrowserGames/ListagemGames";
import CadastroGame from "./cadastroBrowserGames/CadastroGame";
import ListagemCategorias from "./cadastroCategorias/ListagemCategorias";
import Page404 from "../pages/404/Page404";
import DetalhesBrowserGame from "./detalhesBrowserGame/DetalhesBrowserGame";

export default function GoodBrowserGamesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/cadastroGames" element={<ListagemGames />} />
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

      <Route path="/detalhesGame/:id" element={<DetalhesBrowserGame />} />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

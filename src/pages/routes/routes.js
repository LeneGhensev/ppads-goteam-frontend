import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useUseContext } from "../../contexts/UserContext";

import Login from "../login/Login";
import CadastroMembros from "../cadastroMembros/CadastroMembros";
import Home from "../home/Home";
import ListagemGames from "../cadastroBrowserGames/ListagemGames";
import CadastroGame from "../cadastroBrowserGames/CadastroGame";
import ListagemCategorias from "../cadastroCategorias/ListagemCategorias";
import DetalhesBrowserGame from "../detalhesBrowserGame/DetalhesBrowserGame";

export default function GoodBrowserGamesRoutes() {
  const { usuarioLogado } = useUseContext();

  return (
    <Routes>
      {!usuarioLogado ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastroMembros" element={<CadastroMembros />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />

          <Route path="/cadastroGames" element={<ListagemGames />} />
          <Route path="/cadastroGames/novoGame" element={<CadastroGame />} />
          <Route
            path="/cadastroGames/editarGame/:id"
            element={<CadastroGame />}
          />

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
        </>
      )}

      <Route
        path="*"
        element={<Navigate to={usuarioLogado ? "/" : "/login"} />}
      />
    </Routes>
  );
}

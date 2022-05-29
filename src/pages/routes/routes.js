import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useUserContext } from "../../contexts/UserContext";

import Login from "../login/Login";
import CadastroMembros from "../cadastroMembros/CadastroMembros";
import Home from "../home/Home";
import ListagemGames from "../cadastroBrowserGames/ListagemGames";
import CadastroGame from "../cadastroBrowserGames/CadastroGame";
import ListagemCategorias from "../cadastroCategorias/ListagemCategorias";
import DetalhesBrowserGame from "../detalhesBrowserGame/DetalhesBrowserGame";

export default function GoodBrowserGamesRoutes() {
  const { usuarioLogado } = useUserContext();

  return (
    <Routes>
      {!usuarioLogado ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/membros/novoMembro" element={<CadastroMembros />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />

          <Route path="/games" element={<ListagemGames />} />
          <Route path="/games/novoGame" element={<CadastroGame />} />
          <Route path="/games/editarGame/:id" element={<CadastroGame />} />

          <Route path="/categorias" element={<ListagemCategorias />} />
          <Route
            path="/categorias/novaCategoria"
            element={<ListagemCategorias />}
          />
          <Route
            path="/categorias/editarCategoria/:id"
            element={<ListagemCategorias />}
          />

          <Route path="/detalhesGame/:id" element={<DetalhesBrowserGame />} />

          <Route
            path="/membros/editarMembro/:id"
            element={<CadastroMembros />}
          />
        </>
      )}

      <Route
        path="*"
        element={<Navigate to={usuarioLogado ? "/" : "/login"} />}
      />
    </Routes>
  );
}

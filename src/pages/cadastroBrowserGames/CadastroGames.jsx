import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/api";

import PageTitle from "../../components/pageTitle/PageTitle";
import BrowserGame from "../../components/browserGame/BrowserGame";

import Styles from "./CadastroGames.styles";

const CadastroGames = () => {
  const [listBrowserGames, setListBrowserGames] = useState([
    {
      id: 1,
      nome: "nome",
      imagem_ilustrativa: "imagem",
      descricao: "descrição",
      categoria: { id: 1, nome: "Action" },
      url_acesso: "url acesso",
      url_video: "url video",
      tag_classificacao: "tags",
    },
  ]);

  const deleteGame = async (game) => {
    await axios.delete(`/game/id/${game.id}`);
  };

  const updateGame = async (game) => {
    await axios.put(`/game/id/${game.id}`);
  };

  useEffect(() => {
    // axios.get("/games").then((response) => {
    //   setListBrowserGames(response.data);
    // });
  }, []);

  return (
    <Styles.Container>
      <PageTitle>Cadastro de Browser Games</PageTitle>

      {listBrowserGames &&
        listBrowserGames.map((game) => {
          console.log(game);
          return <BrowserGame key={game.id} game={game} />;
        })}

      <Link to="/cadastroGames/novoGame">
        <Button variant="contained">Novo Game</Button>
      </Link>
    </Styles.Container>
  );
};

export default CadastroGames;

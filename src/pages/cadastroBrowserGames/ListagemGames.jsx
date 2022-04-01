import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/api";
import { Button } from "@mui/material";

import PageTitle from "../../components/pageTitle/PageTitle";
import Game from "../../components/Game/Game";

import Styles from "./ListagemGames.styles";

const ListagemGames = () => {
  const [listGames, setListGames] = useState();
  console.log(process.env.REACT_APP_API_URL);
  const getAllGames = async () => {
    try {
      const response = await axios.get("/games");
      setListGames(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGame = async (id) => {
    try {
      await axios.delete(`/game/id/${id}`);
      getAllGames();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <Styles.ContainerListGames>
      <PageTitle>Games</PageTitle>

      <Styles.ContainerAddButton>
        <Link to="/cadastroGames/novoGame">
          <Button variant="contained">Novo Game</Button>
        </Link>
      </Styles.ContainerAddButton>

      {!listGames ? (
        <p>Não há Games cadastrados</p>
      ) : (
        listGames?.map((game) => {
          console.log(game);
          return <Game key={game.id} game={game} deleteGame={deleteGame} />;
        })
      )}
    </Styles.ContainerListGames>
  );
};

export default ListagemGames;

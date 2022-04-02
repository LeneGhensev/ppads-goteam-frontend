import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/api";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

import PageTitle from "../../components/pageTitle/PageTitle";
import Game from "../../components/Game/Game";

import Styles from "./ListagemGames.styles";

const ListagemGames = () => {
  const [listGames, setListGames] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getAllGames = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/games");
      setListGames(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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

      {isLoading ? (
        <Styles.ContainerCircularProgress>
          <CircularProgress />
        </Styles.ContainerCircularProgress>
      ) : (
        <div>
          <Styles.ContainerAddButton>
            <Link to="/cadastroGames/novoGame">
              <Button variant="contained">Novo Game</Button>
            </Link>
          </Styles.ContainerAddButton>

          {!listGames ? (
            <Styles.ContainerGamesEmpty>
              <p>Não há Games cadastrados.</p>
            </Styles.ContainerGamesEmpty>
          ) : (
            listGames?.map((game) => {
              return <Game key={game.id} game={game} deleteGame={deleteGame} />;
            })
          )}
        </div>
      )}
    </Styles.ContainerListGames>
  );
};

export default ListagemGames;

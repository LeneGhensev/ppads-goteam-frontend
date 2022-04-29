import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/api";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

import FormGames from "./form/FormGames";
import Styles from "./CadastroGame.styles";

const CadastroGame = () => {
  const { id } = useParams();
  const [game, setGame] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getGameToEdit = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`/game/id/${id}`);
        setGame(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      getGameToEdit();
    }
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Styles.ContainerCircularProgress>
          <CircularProgress />
        </Styles.ContainerCircularProgress>
      ) : (
        <Styles.ContainerForm>
          <FormGames game={game} />
        </Styles.ContainerForm>
      )}
    </div>
  );
};

export default CadastroGame;

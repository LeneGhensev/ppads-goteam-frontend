import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

import axios from "../../api/api";
import PageTitle from "../../components/pageTitle/PageTitle";
import Styles from "./DetalhesBrowserGame.styles";

const DetalhesBrowserGame = (props) => {
  const { id } = useParams();
  const [game, setGame] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getGame = async () => {
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
      getGame();
    }
  }, [id]);

  return (
    <Styles.ContainerDetalhesGame>
      {isLoading ? (
        <Styles.ContainerCircularProgress>
          <CircularProgress />
        </Styles.ContainerCircularProgress>
      ) : (
        <PageTitle>{game?.nome}</PageTitle>
      )}
    </Styles.ContainerDetalhesGame>
  );
};

export default DetalhesBrowserGame;

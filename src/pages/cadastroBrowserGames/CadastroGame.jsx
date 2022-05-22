import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "../../api/api";
import { useToastContext } from "../../contexts/ToastContext";

import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import FormGames from "./form/FormGames";

import Styles from "./CadastroGame.styles";

const CadastroGame = () => {
  const { id } = useParams();
  const { setShowToast, setToastMessage, setToastVariant } = useToastContext();

  const [game, setGame] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getGameToEdit = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`/game/id/${id}`);
        setGame(response.data);
        setIsLoading(false);

        if (response.status !== 200) {
          setToastMessage("Ops! Algo saiu errado.");
          setToastVariant("error");
          setShowToast(true);
        }
      } catch (error) {
        console.log(error);
        setToastMessage("Ops! Algo saiu errado.");
        setToastVariant("error");
        setShowToast(true);
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

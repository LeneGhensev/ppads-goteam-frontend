import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

import axios from "../../../src/api/api";
import Avaliacao from "./Avaliacao";

import Styles from "./Avaliacoes.styles";

const Avaliacoes = (props) => {
  const { id: idGame } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [avaliacoes, setAvaliacoes] = useState([]);

  console.log(avaliacoes);
  console.log(props);

  const getAvaliacoesDoGame = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`/avaliacoes/game/id/${idGame}`);
      setAvaliacoes(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getAvaliacoesDoGame();
  }, [idGame]);

  return (
    <Styles.ContainerAvaliacoes>
      <h2>Avaliações</h2>
      {isLoading ? (
        <Styles.ContainerCircularProgress>
          <CircularProgress />
        </Styles.ContainerCircularProgress>
      ) : (
        <div>
          {avaliacoes.length === 0 ? (
            <p>Este Game ainda não foi avaliado :(</p>
          ) : (
            avaliacoes?.map((avaliacao) => {
              // ordenar do maior para o menor
              return (
                <Avaliacao
                  avaliacao={avaliacao}
                  editar={props.setShowCamposParaAvaliar}
                />
              );
            })
          )}
        </div>
      )}
    </Styles.ContainerAvaliacoes>
  );
};

export default Avaliacoes;

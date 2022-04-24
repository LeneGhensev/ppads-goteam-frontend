import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

import axios from "../../../src/api/api";
import Avaliacao from "./Avaliacao";

import Styles from "./Avaliacoes.styles";

const Avaliacoes = () => {
  const { id: idGame } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [avaliacoes, setAvaliacoes] = useState();

  const mockAvaliacoes = [{ id: "1" }, { id: "2" }];

  console.log(avaliacoes);

  //   const getAvaliacoesDoGame = async () => {
  //     setIsLoading(true);

  //     try {
  //       const response = await axios.get(`/avaliacoes/game/id/${idGame}`);
  //       setAvaliacoes(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsLoading(false);
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     getAvaliacoesDoGame();
  //   }, [idGame]);

  return (
    <Styles.ContainerAvaliacoes>
      <h1>Container de todas as avaliações do game</h1>
      {isLoading ? (
        <Styles.ContainerCircularProgress>
          <CircularProgress />
        </Styles.ContainerCircularProgress>
      ) : (
        <div>
          {mockAvaliacoes?.map((avaliacao) => {
            // ordenar do maior para o menor
            return <Avaliacao avaliacao={avaliacao} />;
          })}
        </div>
      )}
    </Styles.ContainerAvaliacoes>
  );
};

export default Avaliacoes;

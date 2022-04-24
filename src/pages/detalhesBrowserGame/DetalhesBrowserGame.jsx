import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

import axios from "../../api/api";
import PageTitle from "../../components/pageTitle/PageTitle";
import Avaliacoes from "../../components/avaliacoes/Avaliacoes";
import AvaliarGame from "../../components/avaliarGame/AvaliarGame";

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
        <div>
          <PageTitle>{game?.nome}</PageTitle>

          <Styles.InformacoesGame>
            <img
              src={game?.imagem_ilustrativa}
              alt="Imagem ilustrativa do Game"
            />

            <p>{game?.descricao}</p>

            <a href={game?.url_acesso} target="_blank" rel="noreferrer">
              <p>Jogue agora!</p>
            </a>

            {game?.url_video && (
              <a href={game.url_video} target="_blank" rel="noreferrer">
                <p>Assista ao vídeo demonstrativo</p>
              </a>
            )}

            <div>
              {game?.tags?.map((element, index) => (
                <div key={index}>{element.nome}</div>
              ))}
            </div>
            <p>{game?.categoria?.nome}</p>
          </Styles.InformacoesGame>

          <AvaliarGame />

          <Avaliacoes />
        </div>
      )}
    </Styles.ContainerDetalhesGame>
  );
};

export default DetalhesBrowserGame;

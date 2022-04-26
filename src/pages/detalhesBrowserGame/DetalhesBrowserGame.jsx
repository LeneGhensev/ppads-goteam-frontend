import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { Button } from "@mui/material";

import axios from "../../api/api";
import PageTitle from "../../components/pageTitle/PageTitle";
import Avaliacoes from "../../components/avaliacoes/Avaliacoes";
import AvaliarGame from "../../components/avaliarGame/AvaliarGame";

import Styles from "./DetalhesBrowserGame.styles";

const DetalhesBrowserGame = (props) => {
  const { id } = useParams();

  const [game, setGame] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showCamposParaAvaliar, setShowCamposParaAvaliar] = useState(false);

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

            <div>
              <p>{game?.descricao}</p>

              <p>
                <strong>Categoria:</strong> {game?.categoria?.nome}
              </p>

              <a href={game?.url_acesso} target="_blank" rel="noreferrer">
                <p>Jogue agora!</p>
              </a>

              {game?.url_video && (
                <a href={game.url_video} target="_blank" rel="noreferrer">
                  <p>Assista ao vídeo demonstrativo</p>
                </a>
              )}

              <Styles.Tags>
                {game?.tags?.map((element, index) => (
                  <div key={index}>{element.nome}</div>
                ))}
              </Styles.Tags>
            </div>
          </Styles.InformacoesGame>

          {!showCamposParaAvaliar ? (
            <Styles.ContainerBotaoAvaliarGame>
              <Button
                variant="contained"
                onClick={() => setShowCamposParaAvaliar(true)}
              >
                Avaliar
              </Button>
            </Styles.ContainerBotaoAvaliarGame>
          ) : (
            <AvaliarGame avaliar={setShowCamposParaAvaliar} />
          )}

          <Avaliacoes />
        </div>
      )}
    </Styles.ContainerDetalhesGame>
  );
};

export default DetalhesBrowserGame;

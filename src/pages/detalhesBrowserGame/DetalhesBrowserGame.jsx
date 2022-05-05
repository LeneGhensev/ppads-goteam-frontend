import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { Button } from "@mui/material";

import axios from "../../api/api";
import PageTitle from "../../components/pageTitle/PageTitle";
import Avaliacoes from "../../components/avaliacoes/Avaliacoes";
import AvaliarGame from "../../components/avaliarGame/AvaliarGame";

import Styles from "./DetalhesBrowserGame.styles";

const DetalhesBrowserGame = () => {
  const { id: idGame } = useParams();
  const idUsuario = 1;

  const [game, setGame] = useState();
  const [isLoadingGame, setIsLoadingGame] = useState(false);

  const [avaliacoes, setAvaliacoes] = useState([]);
  const [isLoadingAvaliacoes, setIsLoadingAvaliacoes] = useState(false);

  const [showAvaliarGame, setShowAvaliarGame] = useState(false);
  const [avaliacaoParaEditar, setAvaliacaoParaEditar] = useState();

  const [usuarioJaAvaliou, setUsuarioJaAvaliou] = useState();

  const mostraAvaliarGame = useCallback(() => {
    setAvaliacaoParaEditar();
    setShowAvaliarGame(!showAvaliarGame);
  }, [showAvaliarGame, setShowAvaliarGame]);

  const editarAvaliacao = useCallback(
    (avaliacao) => {
      mostraAvaliarGame();
      setAvaliacaoParaEditar(avaliacao);
    },
    [mostraAvaliarGame]
  );

  const getAvaliacoesDoGame = async () => {
    setIsLoadingAvaliacoes(true);

    try {
      const response = await axios.get(`/avaliacoes/game/id/${idGame}`);
      setAvaliacoes(response.data);
      setIsLoadingAvaliacoes(false);
    } catch (error) {
      setIsLoadingAvaliacoes(false);
      console.log(error);
    }
  };

  const deleteAvaliacao = async (id) => {
    mostraAvaliarGame();

    try {
      await axios.delete(`/avaliacao/id/${id}`);
      getAvaliacoesDoGame();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitAvaliacao = async (validateFormValues) => {
    mostraAvaliarGame();

    let values = {
      ...validateFormValues,
      estrela: Number(validateFormValues.estrela),
      id_game: Number(idGame),
      id_usuario: idUsuario,
    };

    const idAvaliacao = avaliacaoParaEditar?.id;

    if (avaliacaoParaEditar) {
      try {
        await axios.put(`/avaliacao/id/${idAvaliacao}`, values);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.post("/avaliacao", values);
      } catch (error) {
        console.log(error);
      }
    }

    getAvaliacoesDoGame();
  };

  useEffect(() => {
    const usuarioPodeAvaliar = () => {
      const avaliou = avaliacoes.filter(
        (avaliacao) => avaliacao.usuario.id === idUsuario
      );

      if (avaliou.length > 0) {
        setUsuarioJaAvaliou(true);
      } else {
        setUsuarioJaAvaliou(false);
      }
    };

    usuarioPodeAvaliar();
  }, [avaliacoes]);

  useEffect(() => {
    const getGame = async () => {
      setIsLoadingGame(true);

      try {
        const response = await axios.get(`/game/id/${idGame}`);
        setGame(response.data);
        setIsLoadingGame(false);
      } catch (error) {
        setIsLoadingGame(false);
        console.log(error);
      }
    };

    if (idGame) {
      getGame();
      getAvaliacoesDoGame();
    }
  }, [idGame]);

  return (
    <Styles.ContainerDetalhesGame>
      {isLoadingGame ? (
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

          {!showAvaliarGame ? (
            <Styles.ContainerBotaoAvaliarGame>
              <Button
                variant="contained"
                onClick={mostraAvaliarGame}
                disabled={usuarioJaAvaliou}
              >
                Avaliar
              </Button>
            </Styles.ContainerBotaoAvaliarGame>
          ) : (
            <AvaliarGame
              avaliacao={avaliacaoParaEditar}
              handleSubmitAvaliacao={handleSubmitAvaliacao}
              mostraAvaliarGame={mostraAvaliarGame}
            />
          )}

          <Avaliacoes
            usuarioLogado={idUsuario}
            avaliacoes={avaliacoes}
            isLoadingAvaliacoes={isLoadingAvaliacoes}
            editarAvaliacao={editarAvaliacao}
            deleteAvaliacao={deleteAvaliacao}
          />
        </div>
      )}
    </Styles.ContainerDetalhesGame>
  );
};

export default DetalhesBrowserGame;

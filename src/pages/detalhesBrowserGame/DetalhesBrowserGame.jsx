import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { Button, Rating } from "@mui/material";

import axios from "../../api/api";
import { useUserContext } from "../../contexts/UserContext";
import { useToastContext } from "../../contexts/ToastContext";

import PageTitle from "../../components/pageTitle/PageTitle";
import Avaliacoes from "../../components/avaliacoes/Avaliacoes";
import AvaliarGame from "../../components/avaliarGame/AvaliarGame";
import Card from "../../components/card/Card";

import Styles from "./DetalhesBrowserGame.styles";

const DetalhesBrowserGame = () => {
  const { id: idGame } = useParams();
  const { usuario } = useUserContext();
  const { setShowToast, setToastMessage, setToastVariant } = useToastContext();

  const [game, setGame] = useState();
  const [isLoadingGame, setIsLoadingGame] = useState(false);

  const [gamesRecomendados, setGamesRecomendados] = useState([]);
  const [isLoadingGamesRecomendados, setIsLoadingGamesRecomendados] = useState(
    false
  );

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

  const getGamesRecomendados = async () => {
    setIsLoadingGamesRecomendados(true);

    try {
      const response = await axios.get(`/game/recomenda/id/${idGame}`);

      if (response.status !== 200) {
        setToastMessage(
          "Ops! Algo saiu errado para buscar os games recomendados."
        );
        setToastVariant("error");
        setShowToast(true);
      }

      setGamesRecomendados(response.data);
      setIsLoadingGamesRecomendados(false);
    } catch (error) {
      setIsLoadingGamesRecomendados(false);
      console.log(error);
      setToastMessage("Algo saiu errado com o serviço.");
      setToastVariant("error");
      setShowToast(true);
    }
  };

  const getAvaliacoesDoGame = async () => {
    setIsLoadingAvaliacoes(true);

    try {
      const response = await axios.get(`/avaliacoes/game/id/${idGame}`);

      if (response.status !== 200) {
        setToastMessage(
          "Ops! Algo saiu errado para buscar as avaliações do game."
        );
        setToastVariant("error");
        setShowToast(true);
      }

      setAvaliacoes(response.data);
      setIsLoadingAvaliacoes(false);
    } catch (error) {
      setIsLoadingAvaliacoes(false);
      console.log(error);
      setToastMessage("Algo saiu errado com o serviço.");
      setToastVariant("error");
      setShowToast(true);
    }
  };

  const deleteAvaliacao = async (id) => {
    getGame();

    try {
      const response = await axios.delete(`/avaliacao/id/${id}`);

      if (response.status === 202) {
        setToastMessage("Avaliação excluída com sucesso.");
        setToastVariant("success");
        setShowToast(true);
      } else {
        setToastMessage("Ops! Algo saiu errado.");
        setToastVariant("error");
        setShowToast(true);
      }
    } catch (error) {
      console.log(error);
      setToastMessage("Algo saiu errado com o serviço.");
      setToastVariant("error");
      setShowToast(true);
    }

    getAvaliacoesDoGame();
  };

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

  const handleSubmitAvaliacao = async (validateFormValues) => {
    mostraAvaliarGame();

    let values = {
      ...validateFormValues,
      estrela: Number(validateFormValues.estrela),
      id_game: Number(idGame),
      id_usuario: usuario.id,
    };

    const idAvaliacao = avaliacaoParaEditar?.id;

    if (avaliacaoParaEditar) {
      try {
        const response = await axios.put(
          `/avaliacao/id/${idAvaliacao}`,
          values
        );

        if (response.status === 202) {
          setToastMessage("Avaliação alterada com sucesso.");
          setToastVariant("success");
          setShowToast(true);
        } else {
          setToastMessage("Ops! Algo saiu errado.");
          setToastVariant("error");
          setShowToast(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.post("/avaliacao", values);

        if (response.status === 201) {
          setToastMessage("Avaliação cadastrada com sucesso.");
          setToastVariant("success");
          setShowToast(true);
        } else {
          setToastMessage("Ops! Algo saiu errado.");
          setToastVariant("error");
          setShowToast(true);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getGame();
    getAvaliacoesDoGame();
  };

  useEffect(() => {
    const usuarioPodeAvaliar = () => {
      const avaliou = avaliacoes.filter(
        (avaliacao) => avaliacao.usuario.id === usuario.id
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
    if (idGame) {
      getGame();
      getAvaliacoesDoGame();
      getGamesRecomendados();
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

          <Styles.ContainerInfoAvaliacoesRecomendacoes>
            <Styles.ContainerInfoAvaliacoes>
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

                  {game?.estrelas && (
                    <Styles.MediaEstrelas>
                      <p>Média de estrelas: </p>
                      <Rating
                        name="estrelas"
                        value={game?.estrelas}
                        size="medium"
                        readOnly
                      />
                    </Styles.MediaEstrelas>
                  )}
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
                usuarioLogado={usuario.id}
                avaliacoes={avaliacoes}
                isLoadingAvaliacoes={isLoadingAvaliacoes}
                editarAvaliacao={editarAvaliacao}
                deleteAvaliacao={deleteAvaliacao}
              />
            </Styles.ContainerInfoAvaliacoes>

            <Styles.GamesRecomendados>
              {isLoadingGamesRecomendados ? (
                <Styles.ContainerCircularProgress>
                  <CircularProgress />
                </Styles.ContainerCircularProgress>
              ) : (
                <>
                  <h3>Games recomendados</h3>
                  {gamesRecomendados.map((gameRecomendado) => (
                    <Card game={gameRecomendado} />
                  ))}
                </>
              )}
            </Styles.GamesRecomendados>
          </Styles.ContainerInfoAvaliacoesRecomendacoes>
        </div>
      )}
    </Styles.ContainerDetalhesGame>
  );
};

export default DetalhesBrowserGame;

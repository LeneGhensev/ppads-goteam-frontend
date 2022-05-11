import styled from "styled-components";

const StyledContainerDetalhesGame = styled.div`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const StyledContainerInfoAvaliacoesRecomendacoes = styled.div`
  display: flex;

  a {
    text-decoration: none;
  }
`;

const StyledContainerInfoAvaliacoes = styled.div`
  width: 80%;
`;

const StyledGamesRecomendados = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 2rem;
  border-radius: 8px;
  margin: 3rem 3rem 3rem 1.5rem;
  background: rgba(63, 191, 155, 0.2);
`;

const StyledInformacoesGame = styled.div`
  display: flex;
  background-color: rgba(63, 191, 155, 0.2);
  padding: 3rem;
  margin: 3rem 1.5rem 3rem 5rem;
  border-radius: 8px;
  text-align: justify;
  font-size: 18px;

  img {
    margin-right: 2rem;
    min-width: 350px;
    max-height: 250px;
    border-radius: 8px;
  }

  p {
    margin-top: 0;
  }

  a {
    text-decoration: none;
    color: black;
    margin: 0.5rem 0;

    p {
      margin: 0;
    }

    :hover {
      color: #72726e;
    }
  }
`;

const StyledContainerTags = styled.div`
  display: flex;
  margin: 1rem 0 0;

  div {
    background-color: rgba(63, 191, 155, 0.4);
    border-radius: 8px;
    padding: 0.5rem 0.8rem;
    margin: 0 0.5rem;

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }
  }
`;

const StyledMediaEstrelas = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0 0;

  p {
    font-size: 16px;
    margin: 0 1rem 0 0;
  }
`;

const StyledContainerBotaoAvaliarGame = styled.form`
  margin: 3rem 1.5rem 3rem 5rem;
  border-radius: 8px;
  text-align: end;
`;

const StyledContainerCircularProgress = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

export default {
  ContainerDetalhesGame: StyledContainerDetalhesGame,
  ContainerInfoAvaliacoesRecomendacoes: StyledContainerInfoAvaliacoesRecomendacoes,
  ContainerInfoAvaliacoes: StyledContainerInfoAvaliacoes,
  GamesRecomendados: StyledGamesRecomendados,
  InformacoesGame: StyledInformacoesGame,
  Tags: StyledContainerTags,
  MediaEstrelas: StyledMediaEstrelas,
  ContainerBotaoAvaliarGame: StyledContainerBotaoAvaliarGame,
  ContainerCircularProgress: StyledContainerCircularProgress,
};

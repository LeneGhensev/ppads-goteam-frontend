import styled from "styled-components";

const StyledContainerDetalhesGame = styled.div`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const StyledInformacoesGame = styled.div`
  display: flex;
  background-color: #f2f2f2;
  padding: 3rem;
  margin: 2rem;
  border-radius: 8px;

  img {
    margin-right: 1rem;
    min-width: 400px;
  }
`;

const StyledContainerCircularProgress = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

export default {
  ContainerDetalhesGame: StyledContainerDetalhesGame,
  InformacoesGame: StyledInformacoesGame,
  ContainerCircularProgress: StyledContainerCircularProgress,
};

import styled from "styled-components";

const StyledContainerBotaoNovaCategoria = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: flex-end;
  width: 100vw;
  padding: 1rem 0;

  a {
    text-decoration: none;
  }

  button {
    margin-right: 12rem;
  }
`;

const StyledContainerCircularProgress = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

export default {
  ContainerBotaoNovaCategoria: StyledContainerBotaoNovaCategoria,
  ContainerCircularProgress: StyledContainerCircularProgress,
};

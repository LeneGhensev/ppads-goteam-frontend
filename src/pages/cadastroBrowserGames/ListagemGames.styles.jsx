import styled from "styled-components";
import { formControlClasses } from "@mui/material/FormControl";

const formControlRoot = `.${formControlClasses.root}`;

const StyledContainerListGames = styled.div`
  width: 100vw;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const StyledContainerGamesEmpty = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin-top: 2rem;
`;

const StyledContainerCircularProgress = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const StyledContainerAddButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 40%;

  a {
    text-decoration: none;
  }

  button {
    margin-right: 12rem;
  }
`;

const StyledContainerFiltroAddButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 2rem 0;
  width: 100vw;

  ${formControlRoot} {
    margin-right: 2rem;
  }

  input {
    width: 400px;
  }
`;

const StyledContainerFiltro = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 1rem 12rem;
  width: 80vw;

  ${formControlRoot} {
    margin-right: 2rem;
  }

  input {
    width: 400px;
  }
`;

const StyledContainerBotaoLimparFiltros = styled.div`
  display: flex;
  min-width: 200px;
  justify-content: flex-end;

  a {
    text-decoration: none;
  }

  button {
    width: 200px;
  }
`;

export default {
  ContainerListGames: StyledContainerListGames,
  ContainerGamesEmpty: StyledContainerGamesEmpty,
  ContainerCircularProgress: StyledContainerCircularProgress,
  ContainerAddButton: StyledContainerAddButton,
  ContainerFiltroAddButton: StyledContainerFiltroAddButton,
  ContainerFiltro: StyledContainerFiltro,
  ContainerBotaoLimparFiltros: StyledContainerBotaoLimparFiltros,
};

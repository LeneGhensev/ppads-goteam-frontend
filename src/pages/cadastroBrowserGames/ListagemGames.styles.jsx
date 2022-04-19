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
`;

const StyledContainerCircularProgress = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const StyledContainerAddButton = styled.div`
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

const StyledContainerFiltro = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 1rem 12rem;
  width: 80vw;

  ${formControlRoot} {
    margin-right: 2rem;
  }

  input {
    width: 400px;
  }
`;

const StyledContainerBotoesFiltro = styled.div`
  display: flex;
  min-width: 310px;
  justify-content: flex-end;

  a {
    text-decoration: none;
  }

  button {
    margin-left: 1rem;

    :last-child {
      width: 122px;
    }
  }
`;

export default {
  ContainerListGames: StyledContainerListGames,
  ContainerGamesEmpty: StyledContainerGamesEmpty,
  ContainerCircularProgress: StyledContainerCircularProgress,
  ContainerAddButton: StyledContainerAddButton,
  ContainerFiltro: StyledContainerFiltro,
  ContainerBotoesFiltro: StyledContainerBotoesFiltro,
};

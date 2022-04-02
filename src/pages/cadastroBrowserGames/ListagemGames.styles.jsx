import styled from "styled-components";

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

export default {
  ContainerListGames: StyledContainerListGames,
  ContainerGamesEmpty: StyledContainerGamesEmpty,
  ContainerCircularProgress: StyledContainerCircularProgress,
  ContainerAddButton: StyledContainerAddButton,
};

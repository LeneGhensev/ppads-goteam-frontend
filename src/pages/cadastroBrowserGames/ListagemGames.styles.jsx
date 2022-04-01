import styled from "styled-components";

const StyledContainerListGames = styled.div`
  width: 100vw;
  padding-top: 2rem;
  padding-bottom: 2rem;
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
  ContainerAddButton: StyledContainerAddButton,
};

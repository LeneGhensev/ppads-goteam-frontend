import styled from "styled-components";

const StyledContainerGame = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 12rem;
`;

const StyledCard = styled.article`
  display: flex;
  border-radius: 8px;
  width: 100vw;
  padding: 1rem;
  background-color: #d6e3f3;

  :hover {
    box-shadow: 2px 2px 8px 2px #f0ebeb;
  }
`;

const StyledImagemIlustrativa = styled.div`
  align-self: center;
  margin-right: 1rem;
  max-width: 180px;
  max-height: 120px;

  img {
    border-radius: 8px;
  }
`;

const StyledContainerBrowserGameInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 1rem;

  h3 {
    margin: 0;
  }

  p {
    padding-top: 0.5rem;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;

const StyledContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 2rem;

  a {
    text-decoration: none;
  }

  button:first-child {
    margin-right: 0.5rem;
  }
`;

export default {
  ContainerGame: StyledContainerGame,
  Card: StyledCard,
  ImagemIlustrativa: StyledImagemIlustrativa,
  ContainerBrowserGameInfo: StyledContainerBrowserGameInfo,
  ContainerButtons: StyledContainerButtons,
};

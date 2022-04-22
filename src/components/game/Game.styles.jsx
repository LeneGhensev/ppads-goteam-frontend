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
  margin-right: 1rem;
  max-width: 180px;
  max-height: 120px;

  img {
    border-radius: 8px;
    max-width: 180px;
    max-height: 117px;
  }
`;

const StyledContainerGameInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 1rem;
  text-align: justify;
`;

const StyledGameTitle = styled.h3`
  margin: 0;
`;

const StyledGameDescription = styled.p`
  padding-top: 0.5rem;
  margin: 0 0 1rem;
`;

const StyledGameCategory = styled.p`
  margin: 0.5rem 0;
`;

const StyledGameUrl = styled.a`
  text-decoration: none;
  color: black;
  margin: 0.5rem 0;

  p {
    margin: 0;
  }

  :hover {
    color: blue;
  }
`;

const StyledContainerTags = styled.div`
  display: flex;
  margin: 1rem 0 0;

  div {
    background-color: #8ecef3;
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

const StyledContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  a {
    text-decoration: none;
    margin-bottom: 1rem;
  }

  button:first-child {
    color: #ff7300;
  }
`;

export default {
  ContainerGame: StyledContainerGame,
  Card: StyledCard,
  ImagemIlustrativa: StyledImagemIlustrativa,
  Title: StyledGameTitle,
  Description: StyledGameDescription,
  Category: StyledGameCategory,
  AccessUrl: StyledGameUrl,
  VideoUrl: StyledGameUrl,
  Tags: StyledContainerTags,
  ContainerBrowserGameInfo: StyledContainerGameInfo,
  ContainerButtons: StyledContainerButtons,
};

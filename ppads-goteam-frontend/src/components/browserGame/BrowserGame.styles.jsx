import styled from "styled-components";

const StyledContainerCard = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  text-transform: capitalize;
`;

const StyledCard = styled.article`
  display: flex;
  border: 1px solid;
  padding: 1rem;
`;

const StyledImagemIlustrativa = styled.div`
  width: 200px;
  float: left;
`;

const StyledContainerBrowserGameInfo = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }
`;

const StyledContainerButtons = styled.div`
  display: flex;
  margin-left: 2rem;

  button:first-child {
    margin-right: 0.5rem;
  }
`;

export default {
  ContainerCard: StyledContainerCard,
  Card: StyledCard,
  ImagemIlustrativa: StyledImagemIlustrativa,
  ContainerBrowserGameInfo: StyledContainerBrowserGameInfo,
  ContainerButtons: StyledContainerButtons,
};

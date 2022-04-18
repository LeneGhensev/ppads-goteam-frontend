import styled from "styled-components";

const StyledContainerCategoria = styled.div`
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

const StyledTituloCategoria = styled.h3`
  margin: 0;
`;

const StyledContainerBotoes = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  a {
    text-decoration: none;
    margin-bottom: 1rem;
  }
`;

export default {
  ContainerCategoria: StyledContainerCategoria,
  Card: StyledCard,
  Titulo: StyledTituloCategoria,
  ContainerBotoes: StyledContainerBotoes,
};

import styled from "styled-components";

const StyledContainerCategoria = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 12rem;
`;

const StyledCard = styled.article`
  display: flex;
  justify-content: space-between;
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
  margin-left: 1rem;
  a {
    text-decoration: none;
    margin-right: 1rem;
  }
  button:first-child {
    color: #ff7300;
  }
`;

export default {
  ContainerCategoria: StyledContainerCategoria,
  Card: StyledCard,
  Titulo: StyledTituloCategoria,
  ContainerBotoes: StyledContainerBotoes,
};

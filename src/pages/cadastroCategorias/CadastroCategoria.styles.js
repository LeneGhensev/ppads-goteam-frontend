import styled from "styled-components";

const StyledContainerCadastroCategoria = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 12rem;
`;

const StyledFormCadastroCategoria = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  input {
    width: 300px;
  }
`;

const StyledContainerBotoesCadastro = styled.div`
  display: flex;
  min-width: 310px;
  justify-content: flex-end;
  a {
    text-decoration: none;
  }
  button {
    margin-left: 1rem;
    :last-child {
      height: 36.5px;
    }
  }
`;

export default {
  ContainerCadastroCategoria: StyledContainerCadastroCategoria,
  FormCategoria: StyledFormCadastroCategoria,
  ContainerBotoesCadastro: StyledContainerBotoesCadastro,
};

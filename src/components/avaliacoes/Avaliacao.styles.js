import styled from "styled-components";

const StyledContainerAvaliacao = styled.div`
  display: flex;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: rgba(63, 191, 155, 0.2);
`;

const StyledAvaliacao = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const StyledContainerUsuarioEstrelas = styled.div`
  display: flex;
  align-items: center;
`;

const StyledUserName = styled.p`
  font-size: 14px;
  margin-right: 1rem;
`;

const StyledDataDaAvaliacao = styled.p`
  font-size: 14px;
  margin-left: 1rem;
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
    color: #eb6003;
  }
`;

export default {
  ContainerAvaliacao: StyledContainerAvaliacao,
  Avaliacao: StyledAvaliacao,
  UserName: StyledUserName,
  DataDaAvaliacao: StyledDataDaAvaliacao,
  ContainerUsuarioEstrelas: StyledContainerUsuarioEstrelas,
  ContainerButtons: StyledContainerButtons,
};

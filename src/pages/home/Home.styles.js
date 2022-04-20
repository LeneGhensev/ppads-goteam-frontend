import styled from "styled-components";

const StyledContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitulo = styled.h1`
  margin: 1rem 0;
`;

const StyledLogo = styled.img`
  width: 400px;
  height: 400px;
`;

export default {
  ContainerHome: StyledContainerHome,
  Titulo: StyledTitulo,
  Logo: StyledLogo,
};

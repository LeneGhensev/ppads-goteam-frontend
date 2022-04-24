import styled from "styled-components";

const StyledContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;

const StyledLogo = styled.img`
  padding: 2rem 0 0;
  width: 400px;
  height: 400px;
`;

export default {
  ContainerHome: StyledContainerHome,
  Logo: StyledLogo,
};

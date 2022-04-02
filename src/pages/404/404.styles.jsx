import styled from "styled-components";

const StyledContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledText = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export default { ContainerText: StyledContainerText, Text: StyledText };

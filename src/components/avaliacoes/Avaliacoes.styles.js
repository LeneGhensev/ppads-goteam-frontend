import styled from "styled-components";

const StyledContainerAvaliacoes = styled.div`
  /* background-color: #f2f2f2; */
  /* padding: 1rem; */
  margin: 3rem 5rem;
  border-radius: 8px;
`;

const StyledContainerCircularProgress = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

export default {
  ContainerAvaliacoes: StyledContainerAvaliacoes,
  ContainerCircularProgress: StyledContainerCircularProgress,
};

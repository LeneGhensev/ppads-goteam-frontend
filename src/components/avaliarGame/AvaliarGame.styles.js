import styled from "styled-components";
import Button, { buttonClasses } from "@mui/material/Button";

const buttonRoot = `.${buttonClasses.root}`;

const StyledAvaliarGame = styled.form`
  background-color: #f2f2f2;
  padding: 1rem;
  margin: 2rem;
  border-radius: 8px;
`;

const StyledContainerButtons = styled.div`
  padding: 4rem 0 0;
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
  }
`;

const StyledButton = styled(Button)`
  &${buttonRoot} {
    width: 20rem;

    :first-child {
      margin-right: 2rem;
    }
  }
`;

export default {
  AvaliarGame: StyledAvaliarGame,
  ContainerButtons: StyledContainerButtons,
  Button: StyledButton,
};

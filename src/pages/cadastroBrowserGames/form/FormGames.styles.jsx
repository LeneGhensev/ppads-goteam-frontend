import styled from "styled-components";

import TextField, { textFieldClasses } from "@mui/material/TextField";
import FormControl, { formControlClasses } from "@mui/material/FormControl";
import Button, { buttonClasses } from "@mui/material/Button";

const textFieldRoot = `.${textFieldClasses.root}`;
const formControlRoot = `.${formControlClasses.root}`;
const buttonRoot = `.${buttonClasses.root}`;

const StyledContainer = styled.div`
  padding: 2rem 18rem;
  border-radius: 8px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledTextField = styled(TextField)`
  &${textFieldRoot} {
    margin-top: 2rem;

    &:first-child {
      margin-top: 0;
    }
  }

  p {
    color: red;
    margin-left: 0;
  }
`;

const StyledContainerButtons = styled.div`
  padding: 4rem 0 0;
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
  }
`;

const StyledContainerImagemIlustrativa = styled.div`
  padding: 1rem 0 0;

  p {
    font-size: 14px;
    margin: 0.5rem 0;
  }
`;

const StyledFormControl = styled(FormControl)`
  &${formControlRoot} {
    margin-top: 2rem;
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
  Container: StyledContainer,
  Form: StyledForm,
  TextField: StyledTextField,
  FormControl: StyledFormControl,
  ContainerButtons: StyledContainerButtons,
  Button: StyledButton,
  ContainerImagemIlustrativa: StyledContainerImagemIlustrativa,
};

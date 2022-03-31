import styled from "styled-components";

import TextField, { textFieldClasses } from "@mui/material/TextField";
import FormControl, { formControlClasses } from "@mui/material/FormControl";
import Button, { buttonClasses } from "@mui/material/Button";

const textFieldRoot = `.${textFieldClasses.root}`;
const formControlRoot = `.${formControlClasses.root}`;
const buttonRoot = `.${buttonClasses.root}`;

const StyledContainer = styled.div`
  padding: 2rem 6rem;
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
`;

const StyledFormControl = styled(FormControl)`
  &${formControlRoot} {
    margin-top: 2rem;
  }
`;

const StyledContainerButtons = styled.div`
  padding: 2rem 0 0;
  display: flex;
  justify-content: center;
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
};

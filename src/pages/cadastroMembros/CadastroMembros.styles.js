import styled from "styled-components";
import InputLabel, { inputLabelClasses } from "@mui/material/InputLabel";
import FormControl, { formControlClasses } from "@mui/material/FormControl";
import Button, { buttonClasses } from "@mui/material/Button";

const buttonRoot = `.${buttonClasses.root}`;
const formControlRoot = `.${formControlClasses.root}`;
const inputLabelRoot = `.${inputLabelClasses.root}`;

const StyledContainerCadastroMembros = styled.div`
  width: auto;
  padding: 2rem 18rem;
`;

const StyledContainerCircularProgress = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const StyledContainerForm = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledFormControl = styled(FormControl)`
  &${formControlRoot} {
    margin-top: 2rem;
  }
`;

const StyledInputLabel = styled(InputLabel)`
  &${inputLabelRoot} {
    display: contents;
  }
`;

const StyledContainerAvatar = styled.div`
  padding: 1rem 0 0;

  p {
    font-size: 14px;
    margin: 0.5rem 0;
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

const StyledButton = styled(Button)`
  &${buttonRoot} {
    width: 20rem;

    :first-child {
      margin-right: 2rem;
    }
  }
`;

export default {
  ContainerCadastroMembros: StyledContainerCadastroMembros,
  ContainerCircularProgress: StyledContainerCircularProgress,
  ContainerForm: StyledContainerForm,
  Form: StyledForm,
  FormControl: StyledFormControl,
  InputLabel: StyledInputLabel,
  Avatar: StyledContainerAvatar,
  ContainerButtons: StyledContainerButtons,
  Button: StyledButton,
};

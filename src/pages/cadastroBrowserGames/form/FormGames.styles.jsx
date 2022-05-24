import styled from "styled-components";
import FormControl, { formControlClasses } from "@mui/material/FormControl";
import InputLabel, { inputLabelClasses } from "@mui/material/InputLabel";
import Button, { buttonClasses } from "@mui/material/Button";

const buttonRoot = `.${buttonClasses.root}`;
const formControlRoot = `.${formControlClasses.root}`;
const inputLabelRoot = `.${inputLabelClasses.root}`;

const StyledContainer = styled.div`
  width: auto;
  padding: 0 18rem 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
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

  img {
    max-width: 250px;
    max-height: 250px;
    border-radius: 8px;
  }

  p {
    font-size: 14px;
    margin: 0.5rem 0;
  }
`;

const StyledCircularProgressImagemIlustrativa = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
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
  FormControl: StyledFormControl,
  InputLabel: StyledInputLabel,
  ContainerButtons: StyledContainerButtons,
  Button: StyledButton,
  ContainerImagemIlustrativa: StyledContainerImagemIlustrativa,
  CircularProgressImagemIlustrativa: StyledCircularProgressImagemIlustrativa,
};

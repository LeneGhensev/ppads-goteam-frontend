import styled from "styled-components";
import FormControl, { formControlClasses } from "@mui/material/FormControl";
import InputLabel, { inputLabelClasses } from "@mui/material/InputLabel";
import Button, { buttonClasses } from "@mui/material/Button";

const buttonRoot = `.${buttonClasses.root}`;
const formControlRoot = `.${formControlClasses.root}`;
const inputLabelRoot = `.${inputLabelClasses.root}`;

const StyledContainerLogin = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10rem;
`;

const StyledContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  border-radius: 12px;
  background: #f2f2f2;
  box-shadow: 1px 1px 8px 1px #bfbd9f;
`;

const StyledContainerPageTitleLogo = styled.div`
  display: flex;
  width: auto;
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 6rem;
  height: 6rem;
  padding: 1rem 1rem 1rem 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

const StyledContainerButtons = styled.div`
  padding: 4rem 0 0;
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
  }
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
    width: 12rem;

    :first-child {
      margin-right: 2rem;
    }
  }
`;

export default {
  ContainerLogin: StyledContainerLogin,
  ContainerForm: StyledContainerForm,
  PageTitleLogo: StyledContainerPageTitleLogo,
  Logo: StyledLogo,
  Form: StyledForm,
  FormControl: StyledFormControl,
  InputLabel: StyledInputLabel,
  ContainerButtons: StyledContainerButtons,
  Button: StyledButton,
};

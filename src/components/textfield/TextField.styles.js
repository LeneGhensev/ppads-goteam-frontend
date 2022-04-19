import styled from "styled-components";

import TextField, { textFieldClasses } from "@mui/material/TextField";

const textFieldRoot = `.${textFieldClasses.root}`;

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

export default {
  TextField: StyledTextField,
};

import styled from "styled-components";

import FormControl, { formControlClasses } from "@mui/material/FormControl";

const formControlRoot = `.${formControlClasses.root}`;

const StyledFormControl = styled(FormControl)`
  &${formControlRoot} {
    /* margin-top: 2rem; */
  }
`;

export default {
  FormControl: StyledFormControl,
};

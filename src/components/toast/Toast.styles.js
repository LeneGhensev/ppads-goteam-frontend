import styled from "styled-components";
import MuiAlert, { alertClasses } from "@mui/material/Alert";
import { paperClasses } from "@mui/material/Paper";
import MuiSnackbar, { snackbarClasses } from "@mui/material/Snackbar";

const alertAction = `.${alertClasses.action}`;
const alertMessage = `.${alertClasses.message}`;
const paperRootAlertRoot = `.${paperClasses.root}.${alertClasses.root}`;
const snackbarRoot = `&.${snackbarClasses.root}`;

const StyledAlert = styled(MuiAlert)`
  border-radius: 12px;

  ${alertAction} {
    padding-top: 0;
  }

  ${alertMessage} {
    font-weight: bold;
    font-size: 14px;
  }

  &${paperRootAlertRoot} {
    align-items: center;
  }
`;

const StyledSnackbar = styled(MuiSnackbar)`
  ${snackbarRoot} {
    position: fixed;
    left: unset;
    right: unset;
  }
`;

const FixedWrapper = styled.div`
  position: absolute;
  left: 50%;
`;

export default { Alert: StyledAlert, Snackbar: StyledSnackbar, FixedWrapper };

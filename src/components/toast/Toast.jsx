import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Styles from "./Toast.styles";

const Toast = ({ showToast, variant = "success", mensagem, onClose }) => {
  return (
    <Styles.FixedWrapper>
      <Styles.Snackbar
        open={showToast}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          paddingTop: "6rem",
        }}
        autoHideDuration={5000}
        onClose={() => onClose()}
      >
        <Styles.Alert
          variant="filled"
          severity={variant}
          sx={{ minWidth: "30vw", maxWidth: "40vw" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => onClose()}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {mensagem}
        </Styles.Alert>
      </Styles.Snackbar>
    </Styles.FixedWrapper>
  );
};

export default Toast;

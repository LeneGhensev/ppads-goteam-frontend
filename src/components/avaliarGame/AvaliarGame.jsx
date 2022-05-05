import React from "react";
import { Rating } from "@mui/material";

import useValidateForm from "../../hooks/useValidateForm";
import TextField from "../textfield/TextField";

import Styles from "./AvaliarGame.styles";

const AvaliarGame = (props) => {
  const validateForm = useValidateForm({
    initialValues: {
      comentario: props?.avaliacao?.comentario,
      estrela: props?.avaliacao?.estrela || 0,
    },
    validate: function (values) {
      const errors = {};

      if (values.comentario === "") {
        errors.comentario = "Campo obrigatório";
      }

      return errors;
    },
  });

  return (
    <Styles.AvaliarGame
      onSubmit={(event) => {
        event.preventDefault();
        props.handleSubmitAvaliacao(validateForm.values);
      }}
    >
      <h2>Avaliar Game</h2>

      <Rating
        name="estrela"
        value={validateForm.values?.estrela}
        size="large"
        onChange={validateForm.handleChange}
      />

      <TextField
        required
        type="text"
        name="comentario"
        label="Comentário"
        multiline
        rows={4}
        value={validateForm.values?.comentario}
        onChange={validateForm.handleChange}
        onBlur={validateForm.handleBlur}
        helperText={
          validateForm.touched.comentario && validateForm.errors.comentario
        }
        fullWidth
        sx={{ marginTop: "1rem" }}
      />

      <Styles.ContainerButtons>
        <Styles.Button
          variant="outlined"
          onClick={() => props.mostraAvaliarGame()}
        >
          Cancelar
        </Styles.Button>

        <Styles.Button type="submit" variant="contained">
          Gravar
        </Styles.Button>
      </Styles.ContainerButtons>
    </Styles.AvaliarGame>
  );
};

export default AvaliarGame;

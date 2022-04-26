import React from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";

import axios from "../../api/api";
import useValidateForm from "../../hooks/useValidateForm";
import TextField from "../textfield/TextField";

import Styles from "./AvaliarGame.styles";

const AvaliarGame = (props) => {
  const { id } = useParams();

  const idAvaliacao = props?.avaliacao?.id;
  const avaliacaoEditing = props?.avaliacao ? true : false;

  const validateForm = useValidateForm({
    initialValues: {
      comentario: props?.avaliacao?.comentario,
      estrela: props?.avaliacao?.estrela,
    },
    validate: function (values) {
      const errors = {};

      if (values.comentario === "") {
        errors.comentario = "Campo obrigatório";
      }

      // if (values.comentario.length === 255) {
      //   errors.comentario = "Limite de caracteres: 255";
      // }

      return errors;
    },
  });

  const handleSubmit = async () => {
    let values = {
      ...validateForm.values,
      estrela: Number(validateForm.values.estrela),
      id_game: id,
      id_usuario: 1,
    };

    console.log(values);

    if (avaliacaoEditing) {
      try {
        await axios.put(`/avaliacao/id/${idAvaliacao}`, values);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.post("/avaliacao", values);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Styles.AvaliarGame
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <h2>Avaliar Game</h2>

      <Rating
        name="estrela"
        defaultValue={1}
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
      />

      <Styles.ContainerButtons>
        <Styles.Button variant="outlined" onClick={() => props.avaliar(false)}>
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

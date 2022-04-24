import React from "react";

import TextField from "../textfield/TextField";

import Styles from "./AvaliarGame.styles";

const AvaliarGame = () => {
  return (
    <Styles.AvaliarGame>
      <h1>Avaliar game</h1>

      <p>Estrelas</p>

      <TextField
        required
        type="text"
        name="descricao"
        label="Descrição"
        multiline
        rows={4}
        // value={validateForm.values?.descricao}
        // onChange={validateForm.handleChange}
        // onBlur={validateForm.handleBlur}
        // helperText={
        //   validateForm.touched.descricao && validateForm.errors.descricao
        // }
        fullWidth
      />

      <Styles.ContainerButtons>
        <Styles.Button variant="outlined">Cancelar</Styles.Button>

        <Styles.Button type="submit" variant="contained">
          Gravar
        </Styles.Button>
      </Styles.ContainerButtons>
    </Styles.AvaliarGame>
  );
};

export default AvaliarGame;

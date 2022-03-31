import React, { useEffect, useState } from "react";
import axios from "../../../api/api";
import { Link, useNavigate } from "react-router-dom";

import { InputLabel, Select, MenuItem } from "@mui/material";

import Styles from "./FormCadastroBrowserGames.styles";

const FormCadastroBrowserGames = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState();
  const [categories, setCategories] = useState();

  const handleChangeValues = (values) => {
    setValues((prevValue) => ({
      ...prevValue,
      [values.target.name]: values.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log({ ...values });

    // axios
    //   .post("/game", { ...values })
    //   .then((response) => {
    //     console.log(response);
    //     navigate("/cadastroGames");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    navigate("/cadastroGames");
  };

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get("/categoria");
      setCategories(response.data);
    };

    getCategories();
  }, []);

  return (
    <Styles.Container>
      <Styles.Form>
        <Styles.TextField
          required
          type="text"
          name="nome"
          label="Nome"
          // value={values.nome}
          onChange={handleChangeValues}
          fullWidth
        />

        <Styles.TextField
          type="file"
          accept="image/*"
          name="imagem_ilustrativa"
          // label="Imagem ilustrativa"
          // value={values.imagemIlustrativa}
          onChange={handleChangeValues}
          fullWidth
        />

        <Styles.TextField
          required
          type="text"
          name="descricao"
          label="Descrição"
          multiline
          rows={4}
          // value={values.descricao}
          onChange={handleChangeValues}
          fullWidth
        />

        <Styles.FormControl fullWidth sx={{ minWidth: 200 }}>
          <InputLabel id="categoria">Categoria *</InputLabel>
          <Select
            required
            name="categoria"
            labelId="categoria"
            label="Categoria *"
            id="demo-simple-select-autowidth"
            // value={values?.categoria}
            onChange={handleChangeValues}
            defaultValue=""
          >
            {categories?.map(({ id, nome }) => (
              <MenuItem key={id} value={id}>
                {nome}
              </MenuItem>
            ))}
          </Select>
        </Styles.FormControl>

        <Styles.TextField
          required
          type="text"
          name="url_acesso"
          label="URL de acesso"
          // value={values.urlAcesso}
          onChange={handleChangeValues}
          fullWidth
        />

        <Styles.TextField
          required
          type="text"
          name="url_video"
          label="URL do vídeo"
          // value={values.urlVideo}
          onChange={handleChangeValues}
          fullWidth
        />

        <Styles.TextField
          type="text"
          name="tag_classificacao"
          label="Tags de classificação"
          // value={values.tagsClassificacao}
          onChange={handleChangeValues}
          fullWidth
        />

        <Styles.ContainerButtons>
          <Link to="/cadastroGames">
            <Styles.Button variant="outlined">Cancelar</Styles.Button>
          </Link>

          <Styles.Button variant="contained" onClick={handleSubmit}>
            Confirmar
          </Styles.Button>
        </Styles.ContainerButtons>
      </Styles.Form>
    </Styles.Container>
  );
};

export default FormCadastroBrowserGames;

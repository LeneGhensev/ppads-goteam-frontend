import React, { useEffect, useState } from "react";
import axios from "../../../api/api";
import { Link, useNavigate } from "react-router-dom";
import { InputLabel, Select, MenuItem } from "@mui/material";

import useValidateForm from "../../../hooks/useValidateForm";

import Styles from "./FormGames.styles";
import PageTitle from "../../../components/pageTitle/PageTitle";

const FormGames = (props) => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState();

  const title = props?.game ? "Editar Game" : "Novo Game";
  const textButton = props?.game ? "Salvar alterações" : "Gravar novo Game";
  const gameEditing = props?.game ? true : false;

  const validateForm = useValidateForm({
    initialValues: {
      nome: props?.game?.nome,
      imagem_ilustrativa: props?.game?.imagem_ilustrativa,
      descricao: props?.game?.descricao,
      // id_categoria: props?.game?.categoria.id,
      categoria: { id: props?.game?.categoria?.id },
      url_acesso: props?.game?.url_acesso,
      url_video: props?.game?.url_video,
      tag_classificacao: props?.game?.tag_classificacao,
    },
    validate: function (values) {
      const errors = {};

      if (values.nome === "") {
        errors.nome = "Campo obrigatório";
      }

      if (values.descricao === "") {
        errors.descricao = "Campo obrigatório";
      }

      if (values.categoria === "") {
        errors.categoria = "Campo obrigatório";
      }

      if (values.url_acesso === "") {
        errors.url_acesso = "Campo obrigatório";
      }

      return errors;
    },
  });

  const handleSubmit = async () => {
    if (gameEditing) {
      try {
        console.log(`axios.put(/game/id/${props.game.id})`);
        console.log(validateForm.values);
        await axios.put(`/game/id/${props.game.id}`, validateForm.values);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        console.log('axios.post("/game")');
        console.log(validateForm.values);
        await axios.post("/game", validateForm.values);
      } catch (error) {
        console.log(error);
      }
    }

    navigate("/");
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get("/categorias");
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  return (
    <div>
      <PageTitle>{title}</PageTitle>

      <Styles.Container>
        <Styles.Form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(validateForm.values);
          }}
        >
          <Styles.TextField
            required
            type="text"
            name="nome"
            label="Nome"
            value={validateForm.values?.nome}
            onChange={validateForm.handleChange}
            onBlur={validateForm.handleBlur}
            helperText={validateForm.touched.nome && validateForm.errors.nome}
            fullWidth
          />

          {validateForm.values?.imagem_ilustrativa ? (
            <Styles.ContainerImagemIlustrativa>
              <img
                src={validateForm.values?.imagem_ilustrativa}
                alt="Imagem ilustrativa do Game"
                name="imagem_ilustrativa"
                onClick={validateForm.handleChange}
              />
              <p>Clique na imagem para alterar</p>
            </Styles.ContainerImagemIlustrativa>
          ) : (
            <Styles.TextField
              type="file"
              accept="image/*"
              name="imagem_ilustrativa"
              onChange={validateForm.handleImageValues}
              helperText={
                validateForm.touched.imagem_ilustrativa &&
                validateForm.errors.imagem_ilustrativa
              }
              fullWidth
            />
          )}

          <Styles.TextField
            required
            type="text"
            name="descricao"
            label="Descrição"
            multiline
            rows={4}
            value={validateForm.values?.descricao}
            onChange={validateForm.handleChange}
            onBlur={validateForm.handleBlur}
            helperText={
              validateForm.touched.descricao && validateForm.errors.descricao
            }
            fullWidth
          />
          <Styles.FormControl fullWidth sx={{ minWidth: 200 }}>
            <InputLabel id="categoria">Categoria *</InputLabel>
            <Select
              required
              name="categoria"
              labelId="categoria"
              id="demo-simple-select-autowidth"
              value={validateForm.values?.categoria.id}
              onChange={validateForm.handleChange}
              onBlur={validateForm.handleBlur}
              helperText={
                validateForm.touched.categoria && validateForm.errors.categoria
              }
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
            value={validateForm.values?.url_acesso}
            onChange={validateForm.handleChange}
            onBlur={validateForm.handleBlur}
            helperText={
              validateForm.touched.url_acesso && validateForm.errors.url_acesso
            }
            fullWidth
          />
          <Styles.TextField
            type="text"
            name="url_video"
            label="URL do vídeo"
            value={validateForm.values?.url_video}
            onChange={validateForm.handleChange}
            onBlur={validateForm.handleBlur}
            fullWidth
          />
          <Styles.TextField
            type="text"
            name="tag_classificacao"
            label="Tags de classificação"
            value={validateForm.values?.tag_classificacao}
            onChange={validateForm.handleChange}
            onBlur={validateForm.handleBlur}
            fullWidth
          />
          <Styles.ContainerButtons>
            <Link to="/">
              <Styles.Button variant="outlined">Cancelar</Styles.Button>
            </Link>

            <Styles.Button variant="contained" onClick={handleSubmit}>
              {textButton}
            </Styles.Button>
          </Styles.ContainerButtons>
        </Styles.Form>
      </Styles.Container>
    </div>
  );
};

export default FormGames;

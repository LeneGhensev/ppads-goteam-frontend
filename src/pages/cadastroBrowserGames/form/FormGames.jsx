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

  const id = props?.game?.id;
  const title = props?.game ? "Editar Game" : "Novo Game";
  const textButton = props?.game ? "Salvar alterações" : "Gravar novo Game";
  const gameEditing = props?.game ? true : false;

  let tags = "";
  props?.game?.tags?.map((tag) => {
    if (tags === "") {
      tags = tag.nome;
    } else {
      tags = tags + ", " + tag.nome;
    }
  });

  const validateForm = useValidateForm({
    initialValues: {
      nome: props?.game?.nome,
      imagem_ilustrativa: props?.game?.imagem_ilustrativa,
      descricao: props?.game?.descricao,
      id_categoria: props?.game?.categoria.id,
      url_acesso: props?.game?.url_acesso,
      url_video: props?.game?.url_video,
      tags: tags,
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
        errors.id_categoria = "Campo obrigatório";
      }

      if (values.url_acesso === "") {
        errors.url_acesso = "Campo obrigatório";
      }

      if (values.target?.files[0]?.size > 100 * 1024) {
        errors.imagem_ilustrativa = "Tamanho máximo 100KB";
      }

      return errors;
    },
  });

  // const transformValuesToFormData = (valuesToTransform) => {
  //   const data = new FormData();

  //   const { tags: tagToSplit } = valuesToTransform;
  //   const tags = tagToSplit?.split(",").map((tag) => tag.trim());

  //   Object.keys(valuesToTransform).forEach((value) => {
  //     console.log(value, valuesToTransform[value]);
  //     data.append(`${value}`, value);
  //   });
  //   data.append("tags", tags);

  //   return data;
  // };

  const transformValuesToFormData = (valuesToTransform) => {
    const data = new FormData();

    const {
      nome,
      imagem_ilustrativa,
      descricao,
      id_categoria,
      url_acesso,
      url_video,
      tags: tagToSplit,
    } = valuesToTransform;

    const tags = tagToSplit?.split(",").map((tag) => tag.trim());

    data.append("nome", nome);
    data.append("imagem_ilustrativa", imagem_ilustrativa);
    data.append("descricao", descricao);
    data.append("id_categoria", id_categoria);
    data.append("url_acesso", url_acesso);
    data.append("url_video", url_video);
    data.append("tags", tags);

    console.log(data);
    return data;
  };

  const transformImagemToFormData = (imagemToTransform) => {
    let formData = new FormData();
    formData.append("imagem_ilustrativa", imagemToTransform);
    return formData;
  };

  const handleSubmit = async () => {
    // const {
    //   tags: tagToSplit,
    //   // imagem_ilustrativa: imagem,
    // } = validateForm.values;

    // const tags = tagToSplit?.split(",").map((tag) => tag.trim());
    // const { imagem_ilustrativa } = transformImagemToFormData(imagem);
    const { data } = transformValuesToFormData(validateForm.values);

    // const data = { ...validateForm.values, tags };
    console.log(data);

    if (gameEditing) {
      try {
        console.log(`axios.put(/game/id/${id})`);
        console.log(data);
        await axios.put(`/game/id/${id}`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        console.log('axios.post("/game")');
        console.log(data);
        await axios.post("/game", data, {
          headers: {
            "Content-Type": "multipart/form-data",
            // "Content-Type": "application/json",
          },
        });
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
          enctype="multipart/form-data"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
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
              onChange={validateForm.handleChange}
              // helperText={
              //   validateForm.touched.imagem_ilustrativa &&
              //   validateForm.errors.imagem_ilustrativa
              // }
              fullWidth
            />
            // {validateForm.touched.imagem_ilustrativa &&
            //   validateForm.errors.imagem_ilustrativa && (
            //     <span>{validateForm.errors.imagem_ilustrativa}</span>
            //   )}
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
            <InputLabel id="categoria" sx={{ backgroundColor: "white" }}>
              Categoria *
            </InputLabel>
            <Select
              required
              name="id_categoria"
              labelId="categoria"
              id="demo-simple-select-autowidth"
              value={validateForm.values?.id_categoria}
              onChange={validateForm.handleChange}
              onBlur={validateForm.handleBlur}
              helperText={
                validateForm.touched.id_categoria &&
                validateForm.errors.id_categoria
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
            name="tags"
            label="Tags de classificação"
            value={validateForm.values?.tags}
            onChange={validateForm.handleChange}
            onBlur={validateForm.handleBlur}
            fullWidth
          />

          <Styles.ContainerButtons>
            <Link to="/">
              <Styles.Button variant="outlined">Cancelar</Styles.Button>
            </Link>

            <Styles.Button type="submit" variant="contained">
              {textButton}
            </Styles.Button>
          </Styles.ContainerButtons>
        </Styles.Form>
      </Styles.Container>
    </div>
  );
};

export default FormGames;

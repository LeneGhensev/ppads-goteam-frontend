import React, { useEffect, useState } from "react";
import axios from "../../../api/api";
import { Link, useNavigate } from "react-router-dom";

import useValidateForm from "../../../hooks/useValidateForm";

import Styles from "./FormGames.styles";
import PageTitle from "../../../components/pageTitle/PageTitle";
import Select from "../../../components/select/Select";
import TextField from "../../../components/textfield/TextField";

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

      return errors;
    },
  });

  const uploadImagemIlustrativa = async (event) => {
    const formData = new FormData();
    formData.append("filetoupload", event.target.files[0]);

    try {
      console.log("try", formData);

      const response = await axios.post("/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      validateForm.values.imagem_ilustrativa = response.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    let values = { ...validateForm.values };

    if (validateForm.values.tags) {
      const { tags: tagToSplit } = validateForm.values;
      const tags = tagToSplit?.split(",").map((tag) => tag.trim());

      values = { ...values, tags };
    }

    console.log(values);

    if (gameEditing) {
      try {
        await axios.put(`/game/id/${id}`, values);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.post("/game", values);
      } catch (error) {
        console.log(error);
      }
    }

    navigate("/cadastroGames");
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
          <TextField
            required
            type="text"
            name="nome"
            label="Nome"
            value={validateForm.values?.nome}
            helperText={validateForm.touched.nome && validateForm.errors.nome}
            onChange={validateForm.handleChange}
            onBlur={validateForm.handleBlur}
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
            <TextField
              type="file"
              accept="image/*"
              name="imagem_ilustrativa"
              label="URL da imagem ilustrativa do game"
              value={validateForm.values?.imagem_ilustrativa}
              onChange={(event) => uploadImagemIlustrativa(event)}
              onBlur={validateForm.handleBlur}
              fullWidth
            />
          )}

          <TextField
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

          <Select
            required
            id="categoria"
            name="id_categoria"
            label="Categoria *"
            labelId="categoria"
            value={validateForm.values?.id_categoria}
            onChange={validateForm.handleChange}
            onBlur={validateForm.handleBlur}
            helpertext={
              validateForm.touched.id_categoria &&
              validateForm.errors.id_categoria
            }
            sx={{ minWidth: 200, marginTop: "2rem" }}
            fullWidth
          >
            {categories}
          </Select>

          <TextField
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

          <TextField
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
            <Link to="/cadastroGames">
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

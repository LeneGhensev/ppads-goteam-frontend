import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import axios from "../../../api/api";
import { useToastContext } from "../../../contexts/ToastContext";

import useValidateForm from "../../../hooks/useValidateForm";
import PageTitle from "../../../components/pageTitle/PageTitle";
import Select from "../../../components/select/Select";
import TextField from "../../../components/textfield/TextField";

import Styles from "./FormGames.styles";

const FormGames = (props) => {
  const navigate = useNavigate();

  const { setShowToast, setToastMessage, setToastVariant } = useToastContext();

  const [categories, setCategories] = useState();
  const [isLoadingImagemIlustrativa, setIsLoadingImagemIlustrativa] = useState(
    false
  );

  const id = props?.game?.id;
  const title = props?.game ? "Editar Game" : "Novo Game";
  const textButton = props?.game ? "Salvar alterações" : "Gravar novo Game";
  const gameEditing = props?.game ? true : false;

  let tags = "";
  props?.game?.tags?.map((tag) => {
    if (tags === "") {
      return (tags = tag.nome);
    } else {
      return (tags = tags + ", " + tag.nome);
    }
  });

  const validateForm = useValidateForm({
    initialValues: {
      nome: props?.game?.nome,
      imagem_ilustrativa: props?.game?.imagem_ilustrativa,
      descricao: props?.game?.descricao,
      id_categoria: props?.game?.categoria?.id,
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
    setIsLoadingImagemIlustrativa(true);

    const formData = new FormData();
    formData.append("filetoupload", event.target.files[0]);

    try {
      const response = await axios.post("/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      validateForm.values.imagem_ilustrativa = response.data.url;
    } catch (error) {
      console.log(error);
    }

    setIsLoadingImagemIlustrativa(false);
  };

  const handleSubmit = async () => {
    let values = { ...validateForm.values };

    if (validateForm.values.tags) {
      const { tags: tagToSplit } = validateForm.values;
      const tags = tagToSplit?.split(",").map((tag) => tag.trim());

      values = { ...values, tags };
    }

    if (gameEditing) {
      try {
        const response = await axios.put(`/game/id/${id}`, values);

        if (response.status === 202) {
          setToastMessage("Cadastro alterado com sucesso.");
          setToastVariant("success");
          setShowToast(true);
        } else {
          setToastMessage("Ops! Algo saiu errado.");
          setToastVariant("error");
          setShowToast(true);
        }
      } catch (error) {
        console.log(error);
        setToastMessage("Algo saiu errado com o serviço.");
        setToastVariant("error");
        setShowToast(true);
      }
    } else {
      try {
        const response = await axios.post("/game", values);

        if (response.status === 201) {
          setToastMessage("Cadastro realizado com sucesso.");
          setToastVariant("success");
          setShowToast(true);
        } else {
          setToastMessage("Ops! Algo saiu errado.");
          setToastVariant("error");
          setShowToast(true);
        }
      } catch (error) {
        console.log(error);
        setToastMessage("Algo saiu errado com o serviço.");
        setToastVariant("error");
        setShowToast(true);
      }
    }

    await navigate("/games");
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get("/categorias");

        if (response.status !== 200) {
          setToastMessage(
            "Ops! Algo saiu errado para buscar as categorias disponíveis."
          );
          setToastVariant("error");
          setShowToast(true);
        }

        setCategories(response.data);
      } catch (error) {
        console.log(error);
        setToastMessage("Algo saiu errado com o serviço.");
        setToastVariant("error");
        setShowToast(true);
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
          <Styles.FormControl>
            <Styles.InputLabel htmlFor="nome">Nome *</Styles.InputLabel>
            <TextField
              required
              type="text"
              id="nome"
              name="nome"
              value={validateForm.values?.nome}
              helperText={validateForm.touched.nome && validateForm.errors.nome}
              onChange={validateForm.handleChange}
              onBlur={validateForm.handleBlur}
              fullWidth
            />
          </Styles.FormControl>

          {isLoadingImagemIlustrativa ? (
            <Styles.CircularProgressImagemIlustrativa>
              <CircularProgress />
            </Styles.CircularProgressImagemIlustrativa>
          ) : validateForm.values?.imagem_ilustrativa ? (
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
            <Styles.FormControl>
              <Styles.InputLabel htmlFor="imagem_ilustrativa">
                URL da imagem ilustrativa do game
              </Styles.InputLabel>
              <TextField
                type="file"
                accept="image/*"
                id="imagem_ilustrativa"
                name="imagem_ilustrativa"
                value={validateForm.values?.imagem_ilustrativa}
                onChange={(event) => uploadImagemIlustrativa(event)}
                onBlur={validateForm.handleBlur}
                fullWidth
              />
            </Styles.FormControl>
          )}

          <Styles.FormControl>
            <Styles.InputLabel htmlFor="descricao">
              Descrição *
            </Styles.InputLabel>
            <TextField
              required
              type="text"
              id="descricao"
              name="descricao"
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
          </Styles.FormControl>

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

          <Styles.FormControl>
            <Styles.InputLabel htmlFor="url_acesso">
              URL de acesso *
            </Styles.InputLabel>
            <TextField
              required
              type="text"
              id="url_acesso"
              name="url_acesso"
              value={validateForm.values?.url_acesso}
              onChange={validateForm.handleChange}
              onBlur={validateForm.handleBlur}
              helperText={
                validateForm.touched.url_acesso &&
                validateForm.errors.url_acesso
              }
              fullWidth
            />
          </Styles.FormControl>

          <Styles.FormControl>
            <Styles.InputLabel htmlFor="url_video">
              URL do vídeo
            </Styles.InputLabel>
            <TextField
              type="text"
              id="url_video"
              name="url_video"
              value={validateForm.values?.url_video}
              onChange={validateForm.handleChange}
              onBlur={validateForm.handleBlur}
              fullWidth
            />
          </Styles.FormControl>

          <Styles.FormControl>
            <Styles.InputLabel htmlFor="tags">
              Tags de classificação
            </Styles.InputLabel>
            <TextField
              type="text"
              id="tags"
              name="tags"
              value={validateForm.values?.tags}
              onChange={validateForm.handleChange}
              onBlur={validateForm.handleBlur}
              fullWidth
            />
          </Styles.FormControl>

          <Styles.ContainerButtons>
            <Link to="/games">
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

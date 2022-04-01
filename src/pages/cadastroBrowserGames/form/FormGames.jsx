import React, { useEffect, useState } from "react";
import axios from "../../../api/api";
import { Link, useNavigate } from "react-router-dom";

import { InputLabel, Select, MenuItem } from "@mui/material";

import Styles from "./FormGames.styles";
import PageTitle from "../../../components/pageTitle/PageTitle";

const FormGames = (props) => {
  const navigate = useNavigate();

  const title = props?.game ? "Editar Game" : "Novo Game";
  const textButton = props?.game ? "Salvar alterações" : "Gravar novo Game";
  const gameEditing = props?.game ? true : false;

  const [categories, setCategories] = useState();
  const [values, setValues] = useState({
    nome: props?.game?.nome,
    imagem_ilustrativa: props?.game?.imagem_ilustrativa,
    descricao: props?.game?.descricao,
    id_categoria: props?.game?.categoria.id,
    url_acesso: props?.game?.url_acesso,
    url_video: props?.game?.url_video,
    tag_classificacao: props?.game?.tag_classificacao,
  });

  const handleChangeValues = (values) => {
    setValues((prevValue) => ({
      ...prevValue,
      [values.target.name]: values.target.value,
    }));
  };

  const handleImageValues = async (values) => {
    let document = "";
    let reader = new FileReader();

    reader.readAsDataURL(values.target.files[0]);
    reader.onload = function () {
      document = reader.result;

      console.log(document);

      document: document
        ? String(document).replace(/^data:(.;base64,)?/, "")
        : String(this.document).replace(/^data:(.;base64,)?/, "");

      setValues((prevValue) => ({
        ...prevValue,
        [values.target.name]: document,
      }));
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const handleSubmit = async () => {
    if (gameEditing) {
      try {
        console.log(`axios.put(/game/id/${props.game.id}, values)`);
        await axios.put(`/game/id/${props.game.id}`, values);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        console.log('axios.post("/game", values)');
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
        <Styles.Form>
          <Styles.TextField
            required
            type="text"
            name="nome"
            label="Nome"
            value={values?.nome}
            onChange={handleChangeValues}
            fullWidth
          />

          {values?.imagem_ilustrativa ? (
            <Styles.ContainerImagemIlustrativa>
              <img
                src={values?.imagem_ilustrativa}
                alt="Imagem ilustrativa do BrowserGame"
                name="imagem_ilustrativa"
                onClick={handleChangeValues}
              />
              <p>Clique na imagem para alterar</p>
            </Styles.ContainerImagemIlustrativa>
          ) : (
            <Styles.TextField
              type="file"
              accept="image/*"
              name="imagem_ilustrativa"
              onChange={handleImageValues}
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
            value={values?.descricao}
            onChange={handleChangeValues}
            fullWidth
          />
          <Styles.FormControl fullWidth sx={{ minWidth: 200 }}>
            <InputLabel id="categoria">Categoria *</InputLabel>
            <Select
              required
              name="id_categoria"
              labelId="categoria"
              label="Categoria *"
              id="demo-simple-select-autowidth"
              value={values?.id_categoria}
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
            value={values?.url_acesso}
            onChange={handleChangeValues}
            fullWidth
          />
          <Styles.TextField
            required
            type="text"
            name="url_video"
            label="URL do vídeo"
            defaultValue={values?.url_video}
            onChange={handleChangeValues}
            fullWidth
          />
          <Styles.TextField
            type="text"
            name="tag_classificacao"
            label="Tags de classificação"
            value={values?.tag_classificacao}
            onChange={handleChangeValues}
            fullWidth
          />
          <Styles.ContainerButtons>
            <Link to="/cadastroGames">
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

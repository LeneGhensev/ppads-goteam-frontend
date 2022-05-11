import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";

import axios from "../../api/api";
import Styles from "./CadastroCategoria.styles";

const CadastroCategoria = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState();
  const [showFormCadastro, setShowFormCadastro] = useState(false);

  const edicaoCategoria = id ? true : false;
  const textoBotaoConfirmar = id ? "Salvar alterações" : "Cadastrar";

  const handleChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleCloseCadastroCategoria = () => {
    setShowFormCadastro(false);
    setCategoria();
    props.setInicioListagemCategorias(true);
  };

  const handleSubmit = async () => {
    const nomeCategoria = { nome: categoria };

    if (edicaoCategoria) {
      try {
        await axios.put(`/categoria/id/${id}`, nomeCategoria);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.post("/categoria", nomeCategoria);
      } catch (error) {
        console.log(error);
      }
    }

    handleCloseCadastroCategoria();
    navigate("/categorias");
  };

  useEffect(() => {
    const getCategoryToEdit = async () => {
      try {
        const response = await axios.get(`/categoria/id/${id}`);
        setCategoria(response.data.nome);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      getCategoryToEdit();
      setShowFormCadastro(true);
    }
  }, [id]);

  return (
    <Styles.ContainerCadastroCategoria>
      {(showFormCadastro || !props.inicioListagemCategorias) && (
        <Styles.FormCategoria
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <TextField
            required
            type="text"
            name="categoria"
            label="Nome"
            value={categoria || ""}
            onChange={handleChange}
          />

          <Styles.ContainerBotoesCadastro>
            <Link to="/categorias">
              <Button variant="outlined" onClick={handleCloseCadastroCategoria}>
                Cancelar
              </Button>
            </Link>

            <Button type="submit" variant="contained">
              {textoBotaoConfirmar}
            </Button>
          </Styles.ContainerBotoesCadastro>
        </Styles.FormCategoria>
      )}
    </Styles.ContainerCadastroCategoria>
  );
};

export default CadastroCategoria;

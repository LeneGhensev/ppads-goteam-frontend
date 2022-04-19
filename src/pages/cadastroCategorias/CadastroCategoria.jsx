import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, CircularProgress, TextField } from "@mui/material";

import axios from "../../api/api";
import Styles from "./CadastroCategoria.styles";

const CadastroCategoria = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showFormCadastro, setShowFormCadastro] = useState(false);

  const edicaoCategoria = id ? true : false;
  const titulo = id ? "Editar Categoria" : "Nova Categoria";
  const textoBotaoConfirmar = id
    ? "Salvar alterações"
    : "Gravar nova Categoria";

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
    navigate("/cadastroCategorias");
  };

  useEffect(() => {
    const getCategoryToEdit = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`/categoria/id/${id}`);
        setCategoria(response.data.nome);
        setIsLoading(false);
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
      <div>
        {(showFormCadastro || !props.inicioListagemCategorias) && (
          <div>
            <p>{titulo}</p>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
            >
              <TextField
                //   required
                type="text"
                name="categoria"
                label="Nome"
                value={categoria || ""}
                onChange={handleChange}
                //   onChange={validateForm.handleChange}
                //   onBlur={validateForm.handleBlur}
                //   helperText={validateForm.touched.nome && validateForm.errors.nome}
                //   fullWidth
              />

              <Link to="/cadastroCategorias">
                <Button
                  variant="outlined"
                  onClick={handleCloseCadastroCategoria}
                >
                  Cancelar
                </Button>
              </Link>

              <Button type="submit" variant="contained">
                {textoBotaoConfirmar}
              </Button>
            </form>
          </div>
        )}
      </div>
    </Styles.ContainerCadastroCategoria>
  );
};

export default CadastroCategoria;

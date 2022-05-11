import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import Styles from "./Categoria.styles";

const Categoria = (props) => {
  const { id, nome } = props.categoria;

  return (
    <Styles.ContainerCategoria>
      <Styles.Card>
        <Styles.Titulo>{nome}</Styles.Titulo>

        <Styles.ContainerBotoes>
          <Link to={`/categorias/editarCategoria/${id}`}>
            <Button
              startIcon={<ModeEditIcon />}
              onClick={() => props.setInicioListagemCategorias(false)}
            >
              Editar
            </Button>
          </Link>

          <Button
            startIcon={<DeleteIcon />}
            onClick={() => props.deleteCategoria(id)}
          >
            Apagar
          </Button>
        </Styles.ContainerBotoes>
      </Styles.Card>
    </Styles.ContainerCategoria>
  );
};

export default Categoria;

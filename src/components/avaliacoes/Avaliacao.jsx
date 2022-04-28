import React from "react";
import { Rating } from "@mui/material";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import Styles from "./Avaliacao.styles";

const Avaliacao = (props) => {
  const usuarioPodeEditar = props.usuarioLogado === props.avaliacao.usuario.id;
  const dataCreatedAt = new Date(`${props.avaliacao?.createdAt}`);
  const dataDaAvaliacao =
    dataCreatedAt.getDate() +
    "/" +
    (dataCreatedAt.getMonth() + 1) +
    "/" +
    dataCreatedAt.getFullYear();

  console.log(dataDaAvaliacao);
  return (
    <Styles.ContainerAvaliacao>
      <Styles.Avaliacao>
        <Styles.ContainerUsuarioEstrelas>
          <Styles.UserName>
            {props.avaliacao?.usuario?.username}
          </Styles.UserName>

          <Rating
            name="estrela"
            defaultValue={1}
            value={props.avaliacao?.estrela}
            size="small"
            readOnly
          />

          <Styles.DataDaAvaliacao>{dataDaAvaliacao}</Styles.DataDaAvaliacao>
        </Styles.ContainerUsuarioEstrelas>

        <p>{props.avaliacao?.comentario}</p>
      </Styles.Avaliacao>

      {usuarioPodeEditar && (
        <Styles.ContainerButtons>
          <Button
            startIcon={<ModeEditIcon />}
            onClick={() => props.editarAvaliacao(props.avaliacao)}
          >
            Editar
          </Button>

          <Button
            startIcon={<DeleteIcon />}
            onClick={() => props.deleteAvaliacao(props.avaliacao.id)}
          >
            Apagar
          </Button>
        </Styles.ContainerButtons>
      )}
    </Styles.ContainerAvaliacao>
  );
};

export default Avaliacao;

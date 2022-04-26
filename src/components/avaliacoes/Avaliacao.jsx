import React from "react";
import { Rating } from "@mui/material";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import Styles from "./Avaliacao.styles";

const Avaliacao = (props) => {
  console.log(props);

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
        </Styles.ContainerUsuarioEstrelas>

        <p>{props.avaliacao?.comentario}</p>
      </Styles.Avaliacao>

      <Styles.ContainerButtons>
        <Button startIcon={<ModeEditIcon />} onClick={() => props.editar(true)}>
          Editar
        </Button>

        <Button startIcon={<DeleteIcon />}>Apagar</Button>
      </Styles.ContainerButtons>
    </Styles.ContainerAvaliacao>
  );
};

export default Avaliacao;

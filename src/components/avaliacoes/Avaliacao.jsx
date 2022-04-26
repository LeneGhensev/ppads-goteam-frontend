import React from "react";
import { Rating } from "@mui/material";

import Styles from "./Avaliacao.styles";

const Avaliacao = (props) => {
  console.log(props.avaliacao);

  return (
    <Styles.Avaliacao>
      <div>
        <Rating
          name="estrela"
          defaultValue={1}
          value={props.avaliacao?.estrela}
          size="small"
          readOnly
        />

        {/* <p>Avaliação {props.avaliacao?.nome}</p> */}

        <p>{props.avaliacao?.comentario}</p>

        {/* <p>{props.avaliacao?.usuario?.nome}</p> */}
      </div>
    </Styles.Avaliacao>
  );
};

export default Avaliacao;

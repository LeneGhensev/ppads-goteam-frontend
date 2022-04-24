import React from "react";

import Styles from "./Avaliacao.styles";

const Avaliacao = (props) => {
  console.log(props.avaliacao);
  return (
    <Styles.Avaliacao>
      <p>Avaliação {props.avaliacao.id}</p>
    </Styles.Avaliacao>
  );
};

export default Avaliacao;

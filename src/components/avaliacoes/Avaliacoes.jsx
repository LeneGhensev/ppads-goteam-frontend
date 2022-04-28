import React from "react";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

import Avaliacao from "./Avaliacao";

import Styles from "./Avaliacoes.styles";

const Avaliacoes = (props) => {
  return (
    <Styles.ContainerAvaliacoes>
      <h2>Avaliações</h2>
      {props.isLoadingAvaliacoes ? (
        <Styles.ContainerCircularProgress>
          <CircularProgress />
        </Styles.ContainerCircularProgress>
      ) : (
        <div>
          {props.avaliacoes.length === 0 ? (
            <p>Este Game ainda não foi avaliado :(</p>
          ) : (
            props.avaliacoes?.map((avaliacao) => {
              return (
                <Avaliacao
                  key={avaliacao.id}
                  avaliacao={avaliacao}
                  usuarioLogado={props.usuarioLogado}
                  editarAvaliacao={props.editarAvaliacao}
                  deleteAvaliacao={props.deleteAvaliacao}
                />
              );
            })
          )}
        </div>
      )}
    </Styles.ContainerAvaliacoes>
  );
};

export default Avaliacoes;

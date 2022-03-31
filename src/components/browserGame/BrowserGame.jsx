import React from "react";
import PropTypes from "prop-types";

import Styles from "./BrowserGame.styles";

const BrowserGame = ({ game }) => {
  return (
    <Styles.ContainerCard>
      <Styles.Card>
        <Styles.ImagemIlustrativa>
          {game.imagem_ilustrativa}
        </Styles.ImagemIlustrativa>
        <Styles.ContainerBrowserGameInfo>
          <p>{game.nome}</p>
          <p>{game.descricao}</p>
          <p>{game.categoria.nome}</p>
          <p>{game.url_acesso}</p>
          <p>{game.url_video}</p>
          <p>{game.tag_classificacao}</p>
        </Styles.ContainerBrowserGameInfo>
        <Styles.ContainerButtons>
          <button>Editar</button>
          <button>Deletar</button>
        </Styles.ContainerButtons>
      </Styles.Card>
    </Styles.ContainerCard>
  );
};

BrowserGame.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    nome: PropTypes.string.isRequired,
    imagem_ilustrativa: PropTypes.string,
    descricao: PropTypes.string.isRequired,
    categoria: PropTypes.shape({
      id: PropTypes.number.isRequired,
      nome: PropTypes.string.isRequired,
    }).isRequired,
    url_acesso: PropTypes.string.isRequired,
    url_video: PropTypes.string,
    tag_classificacao: PropTypes.string,
  }),
};

export default BrowserGame;

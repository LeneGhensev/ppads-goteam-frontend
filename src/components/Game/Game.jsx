import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import Styles from "./Game.styles";

const Game = (props) => {
  const {
    id,
    nome,
    descricao,
    imagem_ilustrativa,
    url_acesso,
    url_video,
    tag_classificacao,
    categoria,
  } = props.game;

  return (
    <Styles.ContainerGame>
      <Styles.Card>
        <Styles.ImagemIlustrativa>
          <img
            src={imagem_ilustrativa}
            alt="Imagem ilustrativa do BrowserGame"
          />
        </Styles.ImagemIlustrativa>

        <Styles.ContainerBrowserGameInfo>
          <h3>{nome}</h3>
          <p>{descricao}</p>
          <p>
            <strong>Categoria:</strong> {categoria.nome}
          </p>
          <a href={url_acesso} target="_blank" rel="noreferrer">
            <p>Jogue agora!</p>
          </a>
          {url_video && (
            <a href={url_video} target="_blank" rel="noreferrer">
              <p>Assista ao vídeo demonstrativo!</p>
            </a>
          )}
          <p>{tag_classificacao}</p>
        </Styles.ContainerBrowserGameInfo>

        <Styles.ContainerButtons>
          <Link to={`/cadastroGames/editarGame/${id}`}>
            <Button startIcon={<ModeEditIcon />}>Editar</Button>
          </Link>

          <Button
            startIcon={<DeleteIcon />}
            onClick={() => props.deleteGame(id)}
          >
            Delete
          </Button>
        </Styles.ContainerButtons>
      </Styles.Card>
    </Styles.ContainerGame>
  );
};

export default Game;

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
    tags,
    categoria,
  } = props.game;

  return (
    <Styles.ContainerGame>
      <Styles.Card>
        <Styles.ImagemIlustrativa>
          <img src={imagem_ilustrativa} alt="Imagem ilustrativa do Game" />
        </Styles.ImagemIlustrativa>

        <Styles.ContainerBrowserGameInfo>
          <Styles.Title>{nome}</Styles.Title>

          <Styles.Description>{descricao}</Styles.Description>

          <Styles.Category>
            <strong>Categoria:</strong> {categoria?.nome}
          </Styles.Category>

          <Styles.AccessUrl href={url_acesso} target="_blank" rel="noreferrer">
            <p>Jogue agora!</p>
          </Styles.AccessUrl>

          {url_video && (
            <Styles.VideoUrl href={url_video} target="_blank" rel="noreferrer">
              <p>Assista ao vídeo demonstrativo</p>
            </Styles.VideoUrl>
          )}

          <Styles.Tags>
            {tags?.map((element, index) => (
              <div key={index}>{element.nome}</div>
            ))}
          </Styles.Tags>
        </Styles.ContainerBrowserGameInfo>

        <Styles.ContainerButtons>
          <Link to={`/cadastroGames/editarGame/${id}`}>
            <Button startIcon={<ModeEditIcon />}>Editar</Button>
          </Link>

          <Button
            startIcon={<DeleteIcon />}
            onClick={() => props.deleteGame(id)}
          >
            Apagar
          </Button>
        </Styles.ContainerButtons>
      </Styles.Card>
    </Styles.ContainerGame>
  );
};

export default Game;

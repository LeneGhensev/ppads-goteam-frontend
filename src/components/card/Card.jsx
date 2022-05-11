import React from "react";
import { Link } from "react-router-dom";

import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Card = ({ game }) => {
  return (
    <Link to={`/detalhesGame/${game?.id}`}>
      <MuiCard sx={{ margin: "1rem 0" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={game?.imagem_ilustrativa}
            alt={`Card do jogo ${game?.nome}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {game?.nome}
            </Typography>
          </CardContent>
        </CardActionArea>
      </MuiCard>
    </Link>
  );
};

export default Card;

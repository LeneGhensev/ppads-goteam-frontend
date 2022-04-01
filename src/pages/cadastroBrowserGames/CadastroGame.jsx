import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/api";

import FormGames from "./form/FormGames";

const CadastroGame = () => {
  const { id } = useParams();
  const [game, setGame] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // console.log(game);

  useEffect(() => {
    const getGameToEdit = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`/game/id/${id}`);
        // caso exiata a imagem ilustrativa, exibir o campo da listagem e disponibilizar botao de excluir, aí mostra o componente de upload

        setGame(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      getGameToEdit();
    }
  }, [id]);

  return <div>{isLoading ? <p>Carregando</p> : <FormGames game={game} />}</div>;
};

export default CadastroGame;

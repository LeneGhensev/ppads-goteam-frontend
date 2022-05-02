import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

import axios from "../../api/api";
import PageTitle from "../../components/pageTitle/PageTitle";
import Game from "../../components/game/Game";
import Select from "../../components/select/Select";
import TextField from "../../components/textfield/TextField";

import Styles from "./ListagemGames.styles";

const ListagemGames = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [allGames, setAllGames] = useState([]);
  const [filtros, setFiltros] = useState(null);
  const [gamesFiltrados, setGamesFiltrados] = useState(allGames);

  const games = !!filtros ? gamesFiltrados : allGames;

  const getAllGames = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("/games");
      setAllGames(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const deleteGame = async (id) => {
    try {
      await axios.delete(`/game/id/${id}`);
      getAllGames();
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get("/categorias");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeFiltros = (event) => {
    const fieldName = event.target.name;
    const { value } = event.target;

    if (fieldName === "nome" && value === "") {
      delete filtros.nome;

      setFiltros({
        ...filtros,
      });
    } else {
      setFiltros({
        ...filtros,
        [fieldName]: value,
      });
    }
  };

  const filtrarGames = (filtros) => {
    let listaFiltrada = allGames;

    if (filtros?.nome) {
      const nome = String(filtros?.nome).toLowerCase();

      listaFiltrada = listaFiltrada.filter((game) =>
        String(game.nome).toLowerCase().includes(nome)
      );
    }

    if (filtros?.id_categoria) {
      listaFiltrada = listaFiltrada.filter(
        (game) => game?.categoria?.id === filtros.id_categoria
      );
    }

    setGamesFiltrados(listaFiltrada);
  };

  const limparFiltros = () => {
    setFiltros();
    getAllGames();
  };

  useEffect(() => {
    getCategories();
    getAllGames();
  }, []);

  useEffect(() => {
    filtrarGames(filtros);
  }, [filtros]);

  return (
    <Styles.ContainerListGames>
      <PageTitle>Games</PageTitle>

      {isLoading ? (
        <Styles.ContainerCircularProgress>
          <CircularProgress />
        </Styles.ContainerCircularProgress>
      ) : (
        <div>
          <Styles.ContainerFiltro>
            <TextField
              type="text"
              name="nome"
              label="Nome"
              value={filtros?.nome || ""}
              handleChangeFiltros
              onChange={handleChangeFiltros}
            />

            <Select
              id="categoria"
              name="id_categoria"
              label="Categoria"
              labelId="categoria"
              value={filtros?.id_categoria || ""}
              sx={{ minWidth: 400 }}
              onChange={handleChangeFiltros}
            >
              {categories}
            </Select>

            <Styles.ContainerBotoesFiltro>
              {(filtros?.nome || filtros?.id_categoria) && (
                <Button variant="outlined" onClick={limparFiltros}>
                  Limpar Filtros
                </Button>
              )}
            </Styles.ContainerBotoesFiltro>
          </Styles.ContainerFiltro>

          <Styles.ContainerAddButton>
            <Link to="/cadastroGames/novoGame">
              <Button variant="contained">Novo Game</Button>
            </Link>
          </Styles.ContainerAddButton>

          {games.length === 0 ? (
            <Styles.ContainerGamesEmpty>
              <p>Nenhum game foi encontrado :(</p>
            </Styles.ContainerGamesEmpty>
          ) : (
            games.map((game) => {
              return <Game key={game.id} game={game} deleteGame={deleteGame} />;
            })
          )}
        </div>
      )}
    </Styles.ContainerListGames>
  );
};

export default ListagemGames;

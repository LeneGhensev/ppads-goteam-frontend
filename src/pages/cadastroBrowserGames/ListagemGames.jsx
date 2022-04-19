import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/api";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

import PageTitle from "../../components/pageTitle/PageTitle";
import Game from "../../components/game/Game";
import Select from "../../components/select/Select";
import TextField from "../../components/textfield/TextField";

import Styles from "./ListagemGames.styles";

const ListagemGames = () => {
  const [categories, setCategories] = useState();
  const [listGames, setListGames] = useState([]);
  const [filtros, setFiltros] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeFiltros = (event) => {
    const fieldName = event.target.name;
    const { value } = event.target;

    setFiltros({
      ...filtros,
      [fieldName]: value,
    });
  };

  const getAllGames = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/games");
      setListGames(response.data);
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

  const filtrarGames = (filtros) => {
    let listaFiltrada = listGames;

    if (filtros.nome) {
      const nome = String(filtros?.nome).toLowerCase();

      listaFiltrada = listaFiltrada.filter((game) =>
        String(game.nome).toLowerCase().includes(nome)
      );
    }

    if (filtros.id_categoria) {
      listaFiltrada = listaFiltrada.filter(
        (game) => game.categoria.id === filtros.id_categoria
      );
    }

    setListGames(listaFiltrada);
  };

  const limparFiltros = () => {
    setFiltros();
    getAllGames();
  };

  useEffect(() => {
    getCategories();
    getAllGames();
  }, []);

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
              onChange={handleChangeFiltros}
            />

            <Select
              id="categoria"
              name="id_categoria"
              label="Categoria"
              labelId="categoria"
              value={filtros?.id_categoria || ""}
              onChange={handleChangeFiltros}
              sx={{ minWidth: 400 }}
            >
              {categories}
            </Select>

            <Styles.ContainerBotoesFiltro>
              {filtros && (
                <Button variant="outlined" onClick={limparFiltros}>
                  Limpar Filtros
                </Button>
              )}
              <Button variant="contained" onClick={() => filtrarGames(filtros)}>
                Pesquisar
              </Button>
            </Styles.ContainerBotoesFiltro>
          </Styles.ContainerFiltro>

          <Styles.ContainerAddButton>
            <Link to="/cadastroGames/novoGame">
              <Button variant="contained">Novo Game</Button>
            </Link>
          </Styles.ContainerAddButton>

          {!listGames ? (
            <Styles.ContainerGamesEmpty>
              <p>Não há Games cadastrados.</p>
            </Styles.ContainerGamesEmpty>
          ) : (
            listGames?.map((game) => {
              return <Game key={game.id} game={game} deleteGame={deleteGame} />;
            })
          )}
        </div>
      )}
    </Styles.ContainerListGames>
  );
};

export default ListagemGames;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { Button } from "@mui/material";

import axios from "../../api/api";
import { useToastContext } from "../../contexts/ToastContext";

import CadastroCategoria from "./CadastroCategoria";
import Categoria from "../../components/categoria/Categoria";
import PageTitle from "../../components/pageTitle/PageTitle";

import Styles from "./ListagemCategorias.styles";

const ListagemCategorias = () => {
  const { setShowToast, setToastMessage, setToastVariant } = useToastContext();

  const [listCategorias, setListCategorias] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [inicioListagemCategorias, setInicioListagemCategorias] = useState(
    true
  );

  const getAllCategorias = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/categorias");
      setListCategorias(response.data);
      setIsLoading(false);

      if (response.status !== 200) {
        setToastMessage("Ops! Algo saiu errado.");
        setToastVariant("error");
        setShowToast(true);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setToastMessage("Algo saiu errado com o serviço.");
      setToastVariant("error");
      setShowToast(true);
    }
  };

  const deleteCategoria = async (id) => {
    try {
      const response = await axios.delete(`/categoria/id/${id}`);
      getAllCategorias();

      if (response.status === 202) {
        setToastMessage("Categoria excluída com sucesso.");
        setToastVariant("success");
        setShowToast(true);
      } else {
        setToastMessage("Ops! Algo saiu errado.");
        setToastVariant("error");
        setShowToast(true);
      }
    } catch (error) {
      console.log(error);
      setToastMessage("Algo saiu errado com o serviço.");
      setToastVariant("error");
      setShowToast(true);
    }
  };

  useEffect(() => {
    getAllCategorias();
  }, []);

  useEffect(() => {
    if (inicioListagemCategorias) {
      getAllCategorias();
    }
  }, [inicioListagemCategorias]);

  return (
    <Styles.ContainerListCategorias>
      <PageTitle>Categorias</PageTitle>

      {isLoading ? (
        <Styles.ContainerCircularProgress>
          <CircularProgress />
        </Styles.ContainerCircularProgress>
      ) : (
        <div>
          {inicioListagemCategorias && (
            <Styles.ContainerBotaoNovaCategoria>
              <Link to="/categorias/novaCategoria">
                <Button
                  variant="contained"
                  onClick={() => setInicioListagemCategorias(false)}
                >
                  Nova Categoria
                </Button>
              </Link>
            </Styles.ContainerBotaoNovaCategoria>
          )}

          <CadastroCategoria
            inicioListagemCategorias={inicioListagemCategorias}
            setInicioListagemCategorias={setInicioListagemCategorias}
          />

          {!listCategorias ? (
            <Styles.ContainerEmptyCategories>
              <p>Nenhuma categoria foi encontrada :(</p>
            </Styles.ContainerEmptyCategories>
          ) : (
            listCategorias?.map((categoria) => {
              return (
                <Categoria
                  key={categoria.id}
                  categoria={categoria}
                  deleteCategoria={deleteCategoria}
                  setInicioListagemCategorias={setInicioListagemCategorias}
                />
              );
            })
          )}
        </div>
      )}
    </Styles.ContainerListCategorias>
  );
};

export default ListagemCategorias;

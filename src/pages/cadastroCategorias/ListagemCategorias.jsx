import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { Button } from "@mui/material";

import axios from "../../api/api";
import CadastroCategoria from "./CadastroCategoria";
import Categoria from "../../components/categoria/Categoria";
import PageTitle from "../../components/pageTitle/PageTitle";

import Styles from "./ListagemCategorias.styles";
import Toast from "../../components/toast/Toast";

const ListagemCategorias = () => {
  const [listCategorias, setListCategorias] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [inicioListagemCategorias, setInicioListagemCategorias] = useState(
    true
  );

  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const hideToast = () => setShowToast(false);

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

      <Toast
        showToast={showToast}
        variant={toastVariant}
        mensagem={toastMessage}
        onClose={hideToast}
      />
    </Styles.ContainerListCategorias>
  );
};

export default ListagemCategorias;

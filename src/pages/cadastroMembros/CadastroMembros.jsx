import React, { useState } from "react";
import moment from "moment";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import axios from "../../api/api";
import { useToastContext } from "../../contexts/ToastContext";
import { useUserContext } from "../../contexts/UserContext";

import PageTitle from "../../components/pageTitle/PageTitle";
import TextField from "../../components/textfield/TextField";
import useValidateForm from "../../hooks/useValidateForm";

import Styles from "./CadastroMembros.styles";

const CadastroMembros = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { usuario, logout } = useUserContext();
  const { setShowToast, setToastMessage, setToastVariant } = useToastContext();

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingAvatar, setIsLoadingAvatar] = useState(false);

  const edicaoMembro = id ? true : false;
  const title = edicaoMembro ? "Editar cadastro de Membro" : "Novo Membro";
  const textButton = edicaoMembro ? "Salvar alterações" : "Cadastrar";

  const validateForm = useValidateForm({
    initialValues: {
      nome: usuario?.nome,
      avatar: usuario?.avatar,
      username: usuario?.username,
      email: usuario?.email,
      data_de_nasc: usuario?.data_de_nasc
        ? moment(usuario?.data_de_nasc).format("DD/MM/YYYY")
        : "",
      senha: usuario?.senha,
      estado: usuario?.estado,
      pais: usuario?.pais,
    },
    validate: function (values) {
      const errors = {};

      if (values.nome === "") {
        errors.nome = "Campo obrigatório";
      }

      if (values.username === "") {
        errors.username = "Campo obrigatório";
      }

      if (values.email === "") {
        errors.email = "Campo obrigatório";
      }

      if (values.data_de_nasc === "") {
        errors.data_de_nasc = "Campo obrigatório";
      }

      if (values.estado === "") {
        errors.estado = "Campo obrigatório";
      }

      if (values.pais === "") {
        errors.pais = "Campo obrigatório";
      }

      if (values.senha === "") {
        errors.senha = "Campo obrigatório";
      }
      if (values.senha?.length < 8) {
        errors.senha = "Senha deve possuir no minimo 8 caracteres";
      }
      if (values.senha?.length > 128) {
        errors.senha = "Senha deve possuir no maximo 128 caracteres";
      }

      return errors;
    },
  });

  const uploadAvatar = async (event) => {
    setIsLoadingAvatar(true);

    const formData = new FormData();
    formData.append("filetoupload", event.target.files[0]);

    try {
      const response = await axios.post("/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      validateForm.values.avatar = response.data.url;
    } catch (error) {
      console.log(error);
      setToastMessage("Algo saiu errado com o serviço.");
      setToastVariant("error");
      setShowToast(true);
    }

    setIsLoadingAvatar(false);
  };

  const handleSubmit = async () => {
    let values = { ...validateForm.values };

    if (validateForm.values.data_de_nasc) {
      const { data_de_nasc: dataNascimento } = validateForm.values;
      const data_de_nasc = new Date(dataNascimento);

      values = { ...values, data_de_nasc };
    }

    if (edicaoMembro) {
      setIsLoading(true);

      try {
        const response = await axios.put(`/usuario/id/${id}`, values);
        setIsLoading(false);

        if (response.status === 202) {
          setToastMessage("Cadastro alterado com sucesso.");
          setToastVariant("success");
          setShowToast(true);
        } else {
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
    } else {
      setIsLoading(true);

      try {
        const response = await axios.post("/usuario", values);
        setIsLoading(false);

        if (response.status === 201) {
          setToastMessage("Cadastro realizado com sucesso.");
          setToastVariant("success");
          setShowToast(true);
        } else {
          setToastMessage("Preencha corretamente os campos e tente novamente.");
          setToastVariant("warning");
          setShowToast(true);
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        setToastMessage("Algo saiu errado com o serviço.");
        setToastVariant("error");
        setShowToast(true);
      }
    }

    logout();
    navigate("/login");
  };

  return (
    <Styles.ContainerCadastroMembros>
      <PageTitle>{title}</PageTitle>

      {isLoading ? (
        <Styles.ContainerCircularProgress>
          <CircularProgress />
        </Styles.ContainerCircularProgress>
      ) : (
        <Styles.ContainerForm>
          <Styles.Form
            enctype="multipart/form-data"
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <Styles.FormControl>
              <Styles.InputLabel htmlFor="nome">
                Nome Completo *
              </Styles.InputLabel>
              <TextField
                required
                type="text"
                id="nome"
                name="nome"
                value={validateForm.values?.nome}
                helperText={
                  validateForm.touched.nome && validateForm.errors.nome
                }
                onChange={validateForm.handleChange}
                onBlur={validateForm.handleBlur}
                fullWidth
              />
            </Styles.FormControl>

            {isLoadingAvatar ? (
              <Styles.ContainerCircularProgressAvatar>
                <CircularProgress />
              </Styles.ContainerCircularProgressAvatar>
            ) : validateForm.values?.avatar ? (
              <Styles.Avatar>
                <img
                  src={validateForm.values?.avatar}
                  alt="Avatar do usuário"
                  name="avatar"
                  onClick={validateForm.handleChange}
                />
                <p>Clique no avatar para alterar</p>
              </Styles.Avatar>
            ) : (
              <Styles.FormControl>
                <Styles.InputLabel htmlFor="avatar">Avatar</Styles.InputLabel>
                <TextField
                  type="file"
                  accept="image/*"
                  id="avatar"
                  name="avatar"
                  value={validateForm.values?.avatar}
                  onChange={(event) => uploadAvatar(event)}
                  onBlur={validateForm.handleBlur}
                  fullWidth
                />
              </Styles.FormControl>
            )}

            <Styles.FormControl>
              <Styles.InputLabel htmlFor="data_de_nasc">
                Data de Nascimento *
              </Styles.InputLabel>
              <TextField
                required
                type="text"
                id="data_de_nasc"
                name="data_de_nasc"
                value={validateForm.values?.data_de_nasc || ""}
                onChange={validateForm.handleChange}
                onBlur={validateForm.handleBlur}
                helperText={
                  validateForm.touched.data_de_nasc &&
                  validateForm.errors.data_de_nasc
                }
                fullWidth
              />
            </Styles.FormControl>

            <Styles.FormControl>
              <Styles.InputLabel htmlFor="username">
                Username *
              </Styles.InputLabel>
              <TextField
                required
                type="text"
                id="username"
                name="username"
                value={validateForm.values?.username}
                onChange={validateForm.handleChange}
                onBlur={validateForm.handleBlur}
                helperText={
                  validateForm.touched.username && validateForm.errors.username
                }
                fullWidth
              />
            </Styles.FormControl>

            <Styles.FormControl>
              <Styles.InputLabel htmlFor="estado">Estado *</Styles.InputLabel>
              <TextField
                required
                type="text"
                id="estado"
                name="estado"
                value={validateForm.values?.estado}
                onChange={validateForm.handleChange}
                onBlur={validateForm.handleBlur}
                helperText={
                  validateForm.touched.estado && validateForm.errors.estado
                }
                fullWidth
              />
            </Styles.FormControl>

            <Styles.FormControl>
              <Styles.InputLabel htmlFor="pais">País *</Styles.InputLabel>
              <TextField
                required
                type="text"
                id="pais"
                name="pais"
                value={validateForm.values?.pais}
                onChange={validateForm.handleChange}
                onBlur={validateForm.handleBlur}
                helperText={
                  validateForm.touched.pais && validateForm.errors.pais
                }
                fullWidth
              />
            </Styles.FormControl>

            <Styles.FormControl>
              <Styles.InputLabel htmlFor="email">E-mail *</Styles.InputLabel>
              <TextField
                required
                type="text"
                id="email"
                name="email"
                value={validateForm.values?.email}
                onChange={validateForm.handleChange}
                onBlur={validateForm.handleBlur}
                helperText={
                  validateForm.touched.email && validateForm.errors.email
                }
                fullWidth
              />
            </Styles.FormControl>

            <Styles.FormControl>
              <Styles.InputLabel htmlFor="senha">Senha *</Styles.InputLabel>
              <TextField
                required
                type="text"
                id="senha"
                name="senha"
                value={validateForm.values?.senha}
                onChange={validateForm.handleChange}
                onBlur={validateForm.handleBlur}
                helperText={
                  validateForm.touched.senha && validateForm.errors.senha
                }
              />
            </Styles.FormControl>

            <Styles.ContainerButtons>
              <Link to="/login">
                <Styles.Button variant="outlined">Cancelar</Styles.Button>
              </Link>

              <Styles.Button type="submit" variant="contained">
                {textButton}
              </Styles.Button>
            </Styles.ContainerButtons>
          </Styles.Form>
        </Styles.ContainerForm>
      )}
    </Styles.ContainerCadastroMembros>
  );
};

export default CadastroMembros;

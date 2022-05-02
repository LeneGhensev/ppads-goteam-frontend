import React from "react";
import { Link } from "react-router-dom";

import axios from "../../api/api";

// import logo from "../../../src/assets/images/logo.png";
import PageTitle from "../../components/pageTitle/PageTitle";
import TextField from "../../components/textfield/TextField";
import useValidateForm from "../../hooks/useValidateForm";

import Styles from "./Login.styles";

const Login = () => {
  const validateForm = useValidateForm({
    initialValues: {
      usuario: "",
      senha: "",
    },
    validate: function (values) {
      const errors = {};

      if (values.usuario === "") {
        errors.usuario = "Campo obrigatório";
      }

      if (values.senha === "") {
        errors.senha = "Campo obrigatório";
      }

      return errors;
    },
  });

  const handleSubmit = async () => {
    let values = { ...validateForm.values };

    console.log(values);

    try {
      console.log("GET/usuarios", values);
      //   await axios.get("/usuarios", values);
      //   await axios.get(`/usuarios/id/${id}`, values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styles.ContainerLogin>
      <Styles.ContainerForm>
        <Styles.PageTitleLogo>
          {/* <Styles.Logo src={logo} alt="Logo GoodBrowserGames" /> */}
          {/* <PageTitle>GoodBrowserGames</PageTitle> */}
          <PageTitle>Realize seu login</PageTitle>
        </Styles.PageTitleLogo>

        <Styles.Form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <Styles.FormControl>
            <Styles.InputLabel htmlFor="usuario">Usuário *</Styles.InputLabel>
            <TextField
              required
              type="text"
              id="usuario"
              name="usuario"
              sx={{ width: "500px" }}
              value={validateForm.values?.usuario}
              helperText={
                validateForm.touched.usuario && validateForm.errors.usuario
              }
              onChange={validateForm.handleChange}
              onBlur={validateForm.handleBlur}
            />
          </Styles.FormControl>

          <Styles.FormControl>
            <Styles.InputLabel htmlFor="senha">Senha *</Styles.InputLabel>
            <TextField
              required
              type="text"
              id="senha"
              name="senha"
              sx={{ width: "500px" }}
              value={validateForm.values?.senha}
              helperText={
                validateForm.touched.senha && validateForm.errors.senha
              }
              onChange={validateForm.handleChange}
              onBlur={validateForm.handleBlur}
            />
          </Styles.FormControl>

          <Styles.ContainerButtons>
            <Link to="/cadastroMembros">
              <Styles.Button variant="outlined">Cadastrar</Styles.Button>
            </Link>

            <Styles.Button type="submit" variant="contained">
              Entrar
            </Styles.Button>
          </Styles.ContainerButtons>
        </Styles.Form>
      </Styles.ContainerForm>
    </Styles.ContainerLogin>
  );
};

export default Login;

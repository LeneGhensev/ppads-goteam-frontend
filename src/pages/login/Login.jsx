import React from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "../../api/api";

import { useUseContext } from "../../contexts/UserContext";
import useValidateForm from "../../hooks/useValidateForm";
import PageTitle from "../../components/pageTitle/PageTitle";
import TextField from "../../components/textfield/TextField";

import logo from "../../../src/assets/images/logo.png";
import Styles from "./Login.styles";

const Login = () => {
  const { setToken } = useUseContext();
  const navigate = useNavigate();

  const validateForm = useValidateForm({
    initialValues: {
      email: "",
      senha: "",
    },
    validate: function (values) {
      const errors = {};

      if (values.email === "") {
        errors.email = "Campo obrigatório";
      }

      if (values.senha === "") {
        errors.senha = "Campo obrigatório";
      }

      return errors;
    },
  });

  const onSubmit = async () => {
    let values = { ...validateForm.values };

    console.log(values);

    try {
      console.log("post/login", values);
      const resp = await axios.post("/login", values);

      console.log("(token)", resp.data.token);

      if (resp.data.token) {
        setToken(resp.data.token);

        console.log("setToken(token)", resp.data.token);

        axios.defaults.headers.common["x-access-token"] = resp.data.token;

        return navigate("/");
      }
    } catch (error) {
      console.log(error);
    }

    console.log("login não funcionou");
  };

  return (
    <Styles.ContainerLogin>
      <Styles.ContainerForm>
        <Styles.PageTitleLogo>
          <Styles.Logo src={logo} alt="Logo GoodBrowserGames" />
          <PageTitle>GoodBrowserGames</PageTitle>
        </Styles.PageTitleLogo>

        <Styles.Form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
        >
          <Styles.FormControl>
            <Styles.InputLabel htmlFor="email">Email *</Styles.InputLabel>
            <TextField
              required
              type="text"
              id="email"
              name="email"
              sx={{ width: "500px" }}
              value={validateForm.values?.email}
              helperText={
                validateForm.touched.email && validateForm.errors.email
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

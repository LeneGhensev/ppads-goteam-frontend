import React from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "../../api/api";
import { useUseContext } from "../../contexts/UserContext";
import { useToastContext } from "../../contexts/ToastContext";

import useValidateForm from "../../hooks/useValidateForm";
import PageTitle from "../../components/pageTitle/PageTitle";
import TextField from "../../components/textfield/TextField";

import logo from "../../../src/assets/images/logo.png";
import Styles from "./Login.styles";

const Login = () => {
  const navigate = useNavigate();

  const { setToken } = useUseContext();
  const { setShowToast, setToastMessage, setToastVariant } = useToastContext();

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

    try {
      const response = await axios.post("/login", values);

      if (response.data.token) {
        setToken(response.data.token);
        axios.defaults.headers.common["x-access-token"] = response.data.token;

        return navigate("/");
      }
    } catch (error) {
      console.log(error);
      setToastMessage("Usuário e/ou Senha incorretos.");
      setToastVariant("error");
      setShowToast(true);
    }
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
            <Link to="/membros/novoMembro">
              <Styles.Button variant="outlined">Registrar</Styles.Button>
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

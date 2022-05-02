import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import Styles from "./Cabecalho.styles";
import logo from "../../../src/assets/images/logo.png";

const Cabecalho = () => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <Styles.Header>
      {location.pathname !== "/login" ? (
        <>
          <Styles.Logo>
            <Link to="/">
              <img src={logo} alt="Logo GoodBrowserGames" />
              <h1>GoodBrowserGames</h1>
            </Link>
          </Styles.Logo>

          <Styles.Nav>
            <Styles.Ul className="menu-itens">
              <Styles.Li>
                <Link
                  to="/cadastroGames"
                  className="menu-item menu-item--entrar"
                >
                  Cadastro de Games
                </Link>
              </Styles.Li>
              <Styles.Li>
                <Link to="/cadastroCategorias" className="menu-item">
                  Cadastro de Categorias
                </Link>
              </Styles.Li>
            </Styles.Ul>
          </Styles.Nav>
        </>
      ) : (
        <Styles.Logo>
          <Link to="/login">
            <img src={logo} alt="Logo GoodBrowserGames" />
            <h1>GoodBrowserGames</h1>
          </Link>
        </Styles.Logo>
      )}
    </Styles.Header>
  );
};

export default Cabecalho;

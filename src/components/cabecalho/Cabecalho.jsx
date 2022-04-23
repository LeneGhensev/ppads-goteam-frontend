import React from "react";
import { Link } from "react-router-dom";

import Styles from "./Cabecalho.styles";
import logo from "../../../src/assets/images/logo.png";

const Cabecalho = () => {
  return (
    <Styles.Header>
      <Styles.Logo>
        <Link to="/" className="flex flex--centro">
          <img src={logo} alt="Logo GoodBrowserGames" />
          <h1>GoodBrowserGames</h1>
        </Link>
      </Styles.Logo>

      <Styles.Nav>
        <Styles.Ul className="menu-itens">
          <Styles.Li>
            <Link to="/cadastroGames" className="menu-item menu-item--entrar">
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
    </Styles.Header>
  );
};

export default Cabecalho;

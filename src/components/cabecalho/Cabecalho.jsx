import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../src/assets/images/logo.png";

const Cabecalho = () => {
  return (
    <header className="cabecalho container">
      <div className="menu-hamburger">
        <span className="menu-hamburger__icone"></span>
      </div>
      <div className="cabecalho-container">
        <Link to="/" className="flex flex--centro">
          {/* <img className="cabecalho__logo" src={logo} alt="Logo Doguito" /> */}
          <h1 className="cabecalho__titulo">GoodBrowserGames</h1>
        </Link>
      </div>

      <nav className="menu-cabecalho">
        <ul className="menu-itens">
          <li>
            <Link to="/cadastroGames" className="menu-item menu-item--entrar">
              Cadastro de Games
            </Link>
          </li>
          <li>
            <Link to="/cadastroCategorias" className="menu-item">
              Cadastro de Categorias
            </Link>
          </li>
        </ul>
      </nav>
      <div className="menu-cabecalho-background"></div>
    </header>
  );
};

export default Cabecalho;

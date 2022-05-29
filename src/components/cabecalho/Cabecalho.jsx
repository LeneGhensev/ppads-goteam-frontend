import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import logo from "../../../src/assets/images/logo.png";
import { useUserContext } from "../../contexts/UserContext";

import Styles from "./Cabecalho.styles";
import Drawer from "../userMenu/Drawer";

const Cabecalho = () => {
  const location = useLocation();
  const { usuario } = useUserContext();
  const perfilAdmin = usuario.admin === true ? true : false;

  return (
    <Styles.Header>
      <Styles.ContainerLogoMenu>
        <Styles.Logo>
          <Link to="/">
            <img src={logo} alt="Logo GoodBrowserGames" />
            <h1>GoodBrowserGames</h1>
          </Link>
        </Styles.Logo>

        {location.pathname !== "/membros/novoMembro" && (
          <Styles.Nav>
            <Styles.Ul className="menu-itens">
              <Styles.Li>
                <Link to="/games" className="menu-item menu-item--entrar">
                  {perfilAdmin ? "Cadastro de Games" : "Games"}
                </Link>
              </Styles.Li>
              {perfilAdmin && (
                <Styles.Li>
                  <Link to="/categorias" className="menu-item">
                    Cadastro de Categorias
                  </Link>
                </Styles.Li>
              )}
            </Styles.Ul>
          </Styles.Nav>
        )}
      </Styles.ContainerLogoMenu>

      {location.pathname !== "/membros/novoMembro" && (
        <Styles.Avatar>
          <Drawer />
        </Styles.Avatar>
      )}
    </Styles.Header>
  );
};

export default Cabecalho;

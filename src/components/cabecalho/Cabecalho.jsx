import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import Avatar from "@mui/material/Avatar";

import logo from "../../../src/assets/images/logo.png";
import avatarDefault from "../../assets/images/avatarDefault.png";
import { useUseContext } from "../../contexts/UserContext";

import Styles from "./Cabecalho.styles";

const Cabecalho = () => {
  const location = useLocation();
  const { usuario, logout } = useUseContext();
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

        {location.pathname !== "/cadastroMembros" && (
          <Styles.Nav>
            <Styles.Ul className="menu-itens">
              <Styles.Li>
                <Link
                  to="/cadastroGames"
                  className="menu-item menu-item--entrar"
                >
                  {perfilAdmin ? "Cadastro de Games" : "Games"}
                </Link>
              </Styles.Li>
              {perfilAdmin && (
                <Styles.Li>
                  <Link to="/cadastroCategorias" className="menu-item">
                    Cadastro de Categorias
                  </Link>
                </Styles.Li>
              )}
            </Styles.Ul>
          </Styles.Nav>
        )}
      </Styles.ContainerLogoMenu>

      {location.pathname !== "/cadastroMembros" && (
        <Styles.Avatar onClick={logout}>
          <Avatar
            alt={`Avatar do usuário ${usuario.username}`}
            src={usuario.avatar || avatarDefault}
            sx={{ width: 64, height: 64 }}
          />
        </Styles.Avatar>
      )}
    </Styles.Header>
  );
};

export default Cabecalho;

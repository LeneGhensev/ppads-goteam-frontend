import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

import Styles from "./Cabecalho.styles";

import logo from "../../../src/assets/images/logo.png";
import avatarDefault from "../../assets/images/avatarDefault.png";
import { useUseContext } from "../../contexts/UserContext";

const Cabecalho = () => {
  const location = useLocation();
  const { usuario, logout } = useUseContext();

  const exibeNav =
    location.pathname !== "/login" && location.pathname !== "/cadastroMembros"
      ? true
      : false;

  return (
    <Styles.Header>
      {exibeNav ? (
        <>
          <Styles.ContainerLogoMenu>
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
          </Styles.ContainerLogoMenu>

          <Styles.Avatar onClick={logout}>
            <Avatar
              alt={`Avatar do usuário ${usuario.username}`}
              src={usuario.avatar || avatarDefault}
              sx={{ width: 64, height: 64 }}
            />
          </Styles.Avatar>
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

import React from "react";

import logo from "../../../src/assets/images/logo.png";

import Styles from "./Home.styles";

const Home = () => {
  return (
    <Styles.ContainerHome>
      <Styles.Titulo>Good Browser Games</Styles.Titulo>

      <Styles.Logo src={logo} alt="Logo GoodBrowserGames" />
    </Styles.ContainerHome>
  );
};

export default Home;

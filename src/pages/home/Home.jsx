import React from "react";

import logo from "../../../src/assets/images/logo.png";
import PageTitle from "../../components/pageTitle/PageTitle";

import Styles from "./Home.styles";

const Home = () => {
  return (
    <Styles.ContainerHome>
      <PageTitle>GoodBrowserGames</PageTitle>

      <Styles.Logo src={logo} alt="Logo GoodBrowserGames" />
    </Styles.ContainerHome>
  );
};

export default Home;

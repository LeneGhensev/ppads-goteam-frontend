import React from "react";
import FormCadastroBrowserGames from "./form/FormCadastroBrowserGames";
import PageTitle from "../../components/pageTitle/PageTitle";

const NovoGame = () => {
  return (
    <>
      <PageTitle>Novo Game</PageTitle>
      <FormCadastroBrowserGames />
    </>
  );
};

export default NovoGame;

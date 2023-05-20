import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
  //rota principal
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Preparando rotas Node." });
  });
  //rota disponivel|Direcionamento ou caminho
  app.use(express.json(), livros, autores);
};

export default routes;

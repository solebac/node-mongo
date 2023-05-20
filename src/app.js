import express from "express";
import buscaLivro from "./common/util.js";

import db from "./config/dbconect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";

//Criando a conexão
db.on("error", console.log.bind(console, "erro de conexão")); //prevendo o erro
db.once("open", () => {
  console.log("Conexão realizada com sucesso...");
});

//instancia para uso
const app = express();
//O que esta chegando via postman visualizar e armazena o JSON
app.use(express.json()); //[Interpretador]
routes(app); //use das rotas como direcionamento

export default app;

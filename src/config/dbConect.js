import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://solebacfrs:123@cluster0.dfttb89.mongodb.net/solebac-node"
);

//Variavel export | Outra parte da app poder usar e fazer efetivamente a conexao
let db = mongoose.connection;
export default db;

import livros from "./data.js";

function buscaLivro(id) {
  const livro = livros.findIndex((l) => l.id === id);
  return livro;
}

export default buscaLivro;

import livros from "../models/Livro.js";

class LivroController {
  //Sempre manda a representação do livro na requisição
  static listarLivros = (req, res) => {
    livros
      .find()
      .populate("autor")
      .exec((err, books) => {
        res.status(200).json(books);
      });
  };

  static obterLivrosId = (req, res) => {
    const id = req.params.id;

    livros
      .findById(id)
      .populate("autor", "nome")
      .exec((err, livro) => {
        if (err) {
          res
            .status(400)
            .send({ message: `Numero.: ${id} Livro não encontrado...` });
        } else {
          res.status(200).send(livro);
        }
      });
  };

  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body);
    livro.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar livro.` });
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };

  static atualizarLivro = (req, res) => {
    let livro = new livros(req.body);
    const id = req.params.id;
    livros.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      (err) => {
        if (!err) {
          res.status(200).send({ message: "Livro atualizado com sucesso..." });
        } else {
          res
            .status(500)
            .send({ message: `${err.message} - falha ao atualizar o livro.` });
        }
      }
    );
  };

  static excluirLivro = (req, res) => {
    const id = req.params.id;
    livros.findByIdAndRemove(id, (err) => {
      if (err) {
        res.status(200).send({ message: "Livro removido com sucesso..." });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao remover o livro.` });
      }
    });
  };
  static listarLivroEditora = (req, res) => {
    //file:///C:/Videos/Cursos/Nodes/01-Node.js_%20API%20Rest%20com%20Express%20e%20MongoDB/Node.js_%20API%20Rest%20com%20Express%20e%20MongoDB_%20Aula%205%20-%20Atividade%205%20req.query%20e%20req.params%20_%20Alura%20-%20Cursos%20online%20de%20tecnologia.pdf
    const ed = req.query.editora;
    livros.find({ editora: ed }, {}, (err, livros) => {
      res.status(200).send(livros);
    });
  };
}

export default LivroController;

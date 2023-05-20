import autores from "../models/Autor.js";

class AutorController {
  //Sempre manda a representação do autores na requisição
  static listarAutores = (req, res) => {
    autores.find((err, autor) => {
      res.status(200).json(autor);
    });
  };

  static obterAutoresId = (req, res) => {
    const id = req.params.id;

    autores.findById(id, (err, autores) => {
      if (err) {
        res
          .status(400)
          .send({ message: `Numero.: ${id} autor não encontrado...` });
      } else {
        res.status(200).send(autores);
      }
    });
  };

  static cadastrarAutor = (req, res) => {
    let autor = new autores(req.body);
    autor.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar autores.` });
      } else {
        res.status(201).send(autor.toJSON());
      }
    });
  };

  static atualizarAutor = (req, res) => {
    let autor = new autores(req.body);
    const id = req.params.id;
    autores.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      (err) => {
        if (!err) {
          res.status(200).send({ message: "Autor atualizado com sucesso..." });
        } else {
          res
            .status(500)
            .send({ message: `${err.message} - falha ao atualizar o autor.` });
        }
      }
    );
  };

  static excluirAutor = (req, res) => {
    const id = req.params.id;
    autores.findByIdAndRemove(id, (err) => {
      if (err) {
        res.status(200).send({ message: "Autor removido com sucesso..." });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao remover o autor.` });
      }
    });
  };
}
export default AutorController;

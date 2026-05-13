import filme from "../models/Filmes.js";
import { diretor } from "../models/Diretor.js";
import Erro404 from "../errors/Erro404.js";
import { enviaResposta } from "../helpers/enviaResposta.js";
import ErroValidacao from "../errors/ErroValidacao.js";

class FilmeController {

  static async listarFilmes(req, res, next) {
    // Verifica se tem filtro ou não na url antes de realizar a busca
    const { genero } = req.query;
    const filtro = genero ? { genero } : {};
    try {
      const listaFilmes = await filme.find(filtro);
      // Verifica se o retorno da busca está vazio e envia resposta
      enviaResposta(listaFilmes, res);
    } catch (error) {
      next(error);
    };
  };

  static async buscarFilmePorId(req, res, next) {
    const id = req.params.id;
    try {
      const filmeEncontrado = await filme.findById(id);
      if(filmeEncontrado !== null){
        res.status(200).json({ message: "Filme encontrado", filme: filmeEncontrado });
      } else {
        next(new Erro404("Não foi encontrado filme correspondente a esse ID."));  
      }
    } catch (error) {
      next(error);
    };
  };

  static async cadastrarFilme(req, res, next) {
    const dadosFilme = req.body;
    const idDiretor = req.body.diretor;
    // Verificação antecipada para evitar consulta desnecessária no BD
    if(!idDiretor) next(new ErroValidacao("Diretor do filme obrigatório")); 
    try {
      const diretorBuscado = await diretor.findById(idDiretor); // Busca o diretor correspondente ao id
      const filmeCompleto = { ...dadosFilme, diretor: diretorBuscado}; // Constrói o objeto final
      const filmeCadastrado = await filme.create(filmeCompleto);
      return res.status(201).json({ message: "Filme cadastrado com sucesso", filme: filmeCadastrado._doc });
    } catch (error) {
      next(error);
    };
  };

  static async atualizarFilme(req, res, next) {
    const id = req.params.id;
    const atualizacao = req.body;
    const idDiretor = atualizacao.diretor;
    try {
      if (idDiretor) {
        const diretorBuscado = await diretor.findById(idDiretor);
        if(diretorBuscado !== null){
          atualizacao.diretor = diretorBuscado;
        } else {
          next(new Erro404("Não foi encontrado diretor correspondente a esse ID."));
        }
      }
      let filmeAtualizado = await filme.findByIdAndUpdate(id, atualizacao, { returnDocument: "after" });
      res.status(200).json({ message: "Filme atualizado com sucesso", filme: filmeAtualizado._doc });
    } catch (error) {
      next(error);
    };
  };

  static async removerFilme(req, res, next) {
    const id = req.params.id;
    try {
      const filmeRemovido = await filme.findByIdAndDelete(id);
      if(filmeRemovido !== null){
        res.status(200).json({ message: "Filme removido com sucesso", filmeRemovido });
      } else {
        next(new Erro404("Não foi encontrado livro correspondente a esse ID."));
      }
    } catch (error) {
      next(error);
    };
  };
};

export default FilmeController;
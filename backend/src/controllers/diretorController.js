import * as DiretorService from "../services/diretorService.js";

class DiretorController {

  static async listarDiretores(req, res, next) {
    const {query, paginacao} = req;
    try {
      const listaDiretores = await DiretorService.listarDiretores(query, paginacao);
      res.status(200).json({result: listaDiretores});
    } catch (error) {
      next(error);
    };
  };

  static async buscarDiretorPorId(req, res, next) {
    const { id } = req.params;
    try {
      const diretorEncontrado = await DiretorService.buscarDiretorPorId(id);
      res.status(200).json({result: diretorEncontrado});
    } catch (error) {
      next(error);
    };
  };

  static async cadastrarDiretor(req, res, next) {
    const dadosDiretor = req.body;
    try {
      const diretorCadastrado = await DiretorService.cadastrarDiretor(dadosDiretor);
      res.status(201).json({message: "Diretor cadastrado com sucesso", result: diretorCadastrado});
    } catch (error) {
      next(error);
    };
  };

  static async atualizarDiretor(req, res, next) {
    const { id } = req.params;
    const atualizacao = req.body;
    try {
      const diretorAtualizado = await DiretorService.atualizarDiretor(id, atualizacao);
      res.status(200).json({message: "Diretor atualizado com sucesso", result: diretorAtualizado});
    } catch (error) {
      next(error);
    };
  };

  static async removerDiretor(req, res, next) {
    const { id } = req.params;
    try {
      const diretorRemovido = await DiretorService.removerDiretor(id);
      res.status(200).json({message: "Diretor removido com sucesso", result: diretorRemovido});
    } catch (error) {
      next(error);
    };
  };

};

export default DiretorController;
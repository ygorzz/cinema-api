import Erro404 from "../errors/Erro404.js";
import { enviaResposta } from "../helpers/enviaResposta.js";
import {diretor} from "../models/Diretor.js";

class DiretorController {

  static async listarDiretores (req, res, next){
    // Verifica se tem filtro ou não na url antes de realizar a busca
    const {nacionalidade} = req.query;
    const filtro = nacionalidade ? {nacionalidade} : {};
    try {
      const listaDiretores = await diretor.find(filtro);
      enviaResposta(listaDiretores, res);
    } catch (error) {
      next(error);
    };
  };

  static async bucasDiretorPorId (req, res, next){
    const id = req.params.id;
    try {
      const diretorEncontrado = await diretor.findById(id);
      if(diretorEncontrado !== null){
        res.status(200).json({message: "Diretor encontrado", diretor: diretorEncontrado});
      } else  {
        next(new Erro404("Não foi encontrado diretor correspondente a esse ID."));
      }
    } catch (error) {
      next(error);    
    };
  };

  static async cadastrarDiretor (req, res, next){
    try {
      const diretorCadastrado = await diretor.create(req.body);
      res.status(201).json({message: "Diretor cadastrado", diretor: diretorCadastrado});
    } catch (error) {
      next(error);
    };
  };

  static async atualizarDiretor (req, res, next){
    const id = req.params.id;
    const atualizacao = req.body;
    try {
      const diretorAtualizado = await diretor.findByIdAndUpdate(id, atualizacao, {returnDocument: "after"});
      if(diretorAtualizado !== null){
        res.status(200).json({message: "Diretor atualizado com sucesso", diretor: diretorAtualizado});
      } else {
        next(new Erro404("Não foi encontrado diretor correspondente a esse ID."));
      }
    } catch (error) {
      next(error);
    };
  };

  static async removerDiretor (req, res, next){
    try {
      const id = req.params.id;
      const diretorRemovido = await diretor.findByIdAndDelete(id);
      if(diretorRemovido !== null){
        res.status(200).json({message: "Diretor removido com sucesso", diretorRemovido: diretorRemovido}); 
      } else {
        next(new Erro404("Não foi encontrado diretor correspondente a esse ID."));
      }
    } catch (error) {
      next(error);
    };
  };

};

export default DiretorController;
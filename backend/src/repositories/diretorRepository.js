import {diretor} from "../models/Diretor.js";

async function existe(){
  return await diretor.exists({});
}

async function contarDocumentos(busca){
  return await diretor.countDocuments(busca);
}

async function listarDiretores(busca, options){
  const {limite, skip, campoOrdenacao, ordem} = options;  
  return await diretor.find(busca)
    .sort({[campoOrdenacao] : ordem})
    .skip(skip)
    .limit(limite);
}

async function buscarDiretorPorId(id){
  return await diretor.findById(id);
}

async function cadastrarDiretor(novoDiretor){
  // create -> valida campos required antes de executar a operação no BD
  return await diretor.create(novoDiretor);
}

async function atualizarDiretorPorId(id, atualizacao){
  return await diretor.findByIdAndUpdate(id, atualizacao, {returnDocument: "after"});
}

async function removerDiretorPorId(id){
  return await diretor.findByIdAndDelete(id);
}

export {
  buscarDiretorPorId,
  existe,
  contarDocumentos,
  listarDiretores,
  cadastrarDiretor,
  atualizarDiretorPorId,
  removerDiretorPorId
};
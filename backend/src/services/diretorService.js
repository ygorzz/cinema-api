import Erro404 from "../errors/Erro404.js";
import ErroConflito from "../errors/ErroConflito.js";
import validaLimite from "../helpers/validaLimite.js";
import validaPagina from "../helpers/validaPagina.js";
import * as DiretorRepository from "../repositories/diretorRepository.js";
import * as FilmeRepositoy from "../repositories/filmeRepository.js";

async function listarDiretores(query, paginacao){

  const busca = processaBusca(query);
  const { pagina, limite, skip, campoOrdenacao, ordem } = paginacao;
  validaLimite(limite);
  const totalDocumentos = await DiretorRepository.contarDocumentos(busca); // para validar a página
  if(totalDocumentos === 0){
    return [];
  }
  validaPagina(totalDocumentos, pagina, limite);
  const listaDiretores = await DiretorRepository.listarDiretores(busca, {limite, skip, campoOrdenacao, ordem });

  return listaDiretores;
}

async function buscarDiretorPorId(id){

  const diretorBuscado = await DiretorRepository.buscarDiretorPorId(id);
  if(!diretorBuscado){
    throw new Erro404("Não foi encontrado diretor correspondente a esse id.");
    
  }

  return diretorBuscado;
}

async function cadastrarDiretor(diretor){
  return await DiretorRepository.cadastrarDiretor(diretor);
}

async function atualizarDiretor(id, atualizacao){
  const diretorAtualizado = await DiretorRepository.atualizarDiretorPorId(id, atualizacao);
  if(!diretorAtualizado){
    throw new Erro404("Não foi encontrado diretor correspondente a esse ID.");
  }
  
  return diretorAtualizado;
}

async function removerDiretor(id){
  // Verifica se existe filmes vinculados ao diretor a remover
  const busca = {
    "diretor._id": id
  };
  const filmesComEsseDiretor = await FilmeRepositoy.listarFilmes(busca);
  if(filmesComEsseDiretor.length > 0){
    throw new ErroConflito("Não é possível remover este diretor, pois existem filmes vinculados a ele.");
  }

  const diretorRemovido = await DiretorRepository.removerDiretorPorId(id);
  if(!diretorRemovido){
    throw new Erro404("Não foi encontrado diretor correspondente a esse ID.");
  }

  return diretorRemovido;
}

function processaBusca(busca) {

  const { nome, nacionalidade } = busca;
  const filtros = {};

  if (nome) filtros.nome = { $regex: nome, $options: "i" };
  if (nacionalidade) filtros.nacionalidade = { $regex: nacionalidade, $options: "i" };

  return filtros;
}

export {
  buscarDiretorPorId,
  listarDiretores,
  cadastrarDiretor,
  atualizarDiretor,
  removerDiretor
};
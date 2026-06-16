import * as FilmeRepositoy from "../repositories/filmeRepository.js";
import * as DiretorRepository from "../repositories/diretorRepository.js";
import validaPagina from "../helpers/validaPagina.js";
import validaLimite from "../helpers/validaLimite.js";
import escapeRegex from "../helpers/escapeRegex.js";
import Erro404 from "../errors/Erro404.js";
import ErroValidacao from "../errors/ErroValidacao.js";


async function listarFilmes(query, paginacao){

  let listaFilmes = [];

  if(!(await FilmeRepositoy.exists())){
    return [];
  }

  const busca = processaBusca(query);
  const { pagina, limite, skip, campoOrdenacao, ordem } = paginacao;
  validaLimite(limite);
  const totalDocumentos = await FilmeRepositoy.countDocuments(busca);
  if(totalDocumentos > 0){
    validaPagina(totalDocumentos, pagina, limite);
    listaFilmes = await FilmeRepositoy.find(busca, {limite, skip, campoOrdenacao, ordem});
  }

  return listaFilmes;
}

async function buscarFilmePorId(id) {
  const filmeEncontrado = await FilmeRepositoy.findById(id);
  if(!filmeEncontrado){
    throw new Erro404("Não foi encontrado dado correspondente a esse id.");
  }

  return filmeEncontrado;
}

async function cadastrarFilme(filme){
  const tituloFilme = filme.titulo;
  const idDiretor = filme.diretor;

  // Verificação antecipada para evitar consulta desnecessária no BD
  if (!tituloFilme || !idDiretor) {
    throw new ErroValidacao("Titulo e diretor do filme são obrigatórios");
  }

  const diretorBuscado = await DiretorRepository.findById(idDiretor); // Busca o diretor correspondente ao id
  if (!diretorBuscado) {
    throw new Erro404("Não foi encontrado diretor correspondente a esse ID.");
  }

  const filmeCompleto = { ...filme, diretor: diretorBuscado }; // Constrói o objeto final
  const filmeCadastrado = await FilmeRepositoy.create(filmeCompleto);

  return filmeCadastrado;
}

async function atualizarFilme(id, atualizacao) {
  const idDiretor = atualizacao.diretor;

  if (idDiretor) {
    const diretorBuscado = await DiretorRepository.findById(idDiretor);
    if (!diretorBuscado) {
      throw new Erro404("Não foi encontrado diretor correspondente a esse ID.");
    }
    atualizacao.diretor = diretorBuscado;
  }

  const filmeAtualizado = await FilmeRepositoy.findByIdAndUpdate(id, atualizacao);

  return filmeAtualizado;
}

async function removerFilme(id) {
  return await FilmeRepositoy.findByIdAndDelete(id);
}

function processaBusca(busca) {

  const { genero, anoLancamento, titulo, diretor } = busca;
  const filtros = {};
  
  if (genero) filtros.genero = genero;
  if (anoLancamento) filtros.anoLancamento = parseInt(anoLancamento);
  if (titulo){
    const tituloLimpo = escapeRegex(titulo); // Evita regex injections
    filtros.titulo = { $regex: tituloLimpo, $options: "i" };
  } 
  if (diretor){
    const diretorLimpo = escapeRegex(diretor); // Evita regex injections
    filtros["diretor.nome"] = { $regex: diretorLimpo, $options: "i" }; 
  }

  return filtros;
}


export {
  listarFilmes,
  buscarFilmePorId,
  cadastrarFilme,
  atualizarFilme,
  removerFilme
};

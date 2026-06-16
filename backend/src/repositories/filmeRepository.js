import filme from "../models/Filmes.js";

async function exists(){
  return await filme.exists({});
}

async function countDocuments(busca){
  return await filme.countDocuments(busca);
}

async function find(busca, options){
  const {limite, skip, campoOrdenacao, ordem} = options;  
  return await filme.find(busca)
    .sort({[campoOrdenacao] : ordem})
    .skip(skip)
    .limit(limite);
}

async function findById(id) {
  return await filme.findById(id);
}

async function create(novoFilme) {
  return await filme.create(novoFilme);
}

async function findByIdAndUpdate(id, atualizacao) {
  return await filme.findByIdAndUpdate(id, atualizacao, {returnDocument: "after"});
}

async function findByIdAndDelete(id) {
  return await filme.findByIdAndDelete(id);
}

export {
  exists,
  countDocuments,
  find,
  findById,
  findByIdAndUpdate,
  findByIdAndDelete,
  create
};
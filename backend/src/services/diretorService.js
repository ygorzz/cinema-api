import * as DiretorRepository from "../repositories/diretorRepository.js";

async function buscarDiretorPorId(id){
  const diretorBuscado = await DiretorRepository.findById(id);
  return diretorBuscado;
}

export {
  buscarDiretorPorId,
};
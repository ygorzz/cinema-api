import Erro404 from "../errors/Erro404.js";

const mensagemErro404 = "Não foi encontrado dado correspondente a esse id.";

export default function enviaRespostaObjeto(dadosResposta, res, mensagem) {

  // Para respostas em outras rotas
  if (validaBuscaObjeto(dadosResposta)){
    return res.status(200).json({message: mensagem, result: dadosResposta});
  } else {
    throw new Erro404(mensagemErro404);
  }

}

// Verifica se houve retorno de null ou não para a busca - retorna true/false
function validaBuscaObjeto(dadosResposta) {
  return dadosResposta !== null;
}
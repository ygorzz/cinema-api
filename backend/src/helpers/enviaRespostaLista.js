const message = "Não foram encontrados dados correspondentes com essa busca";

export default function enviaRespostaLista(dadosBusca, res) {

  if (validaBuscaLista(dadosBusca)) {
    return res.status(200).json({result: dadosBusca});
  } else {
    return res.status(200).json({
      result: dadosBusca,
      message: message  
    });
  }
}

// Verifica se houve retorno de um ARRAY vazio ou não para a busca - retorna true/false
function validaBuscaLista(dadosBusca) {
  return dadosBusca.length > 0;
}

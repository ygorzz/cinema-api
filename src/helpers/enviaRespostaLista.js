export default function enviaRespostaLista(dadosBusca, res, filtro) {

  const filtros = Object.keys(filtro).length;
  let mensagem = "Não há dados cadastrados nessa coleção"; // Para busca sem filtros
  if (filtros !== 0) mensagem = "Não foram encontrados dados correspondentes com essa busca"; // Para busca com filtros

  if (validaBuscaLista(dadosBusca)) {
    return res.status(200).json({ resultado: dadosBusca });
  } else {
    return res.status(200).json({
      resultado: dadosBusca,
      message: mensagem
    });
  }
}

// Verifica se houve retorno de um ARRAY vazio ou não para a busca - retorna true/false
function validaBuscaLista(dadosBusca) {
  return dadosBusca.length > 0;
}

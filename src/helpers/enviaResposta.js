export function enviaResposta(dadosBusca, res){
    
  if(validaBusca(dadosBusca)){
    return res.status(200).json({ resultado: dadosBusca });
  } else {
    return res.status(200).json({
      resultado: dadosBusca,
      message: "Não foram encontrados dados correspondentes com essa busca"
    });
  }

}

// Verifica se houve reotrno vazio ou não para a busca - retorna true/false
function validaBusca(dadosBusca){
  return dadosBusca.length > 0; 
}
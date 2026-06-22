export function validaOrdenacao(ordenacao, campoOrdenacao){
    const ordenacaoPadrao = "_id:-1";
    const separador = ":"
    const ordem = ordenacao;
    ordenacao = ordenacao ? campoOrdenacao + separador + ordem : ordenacaoPadrao;
    return ordenacao;
}
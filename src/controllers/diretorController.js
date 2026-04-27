import {diretor} from '../models/Diretor.js';

class DiretorController {

    static async listarDiretores (req, res){
        // Verifica se tem filtro ou não na url antes de realizar a busca
        const {nacionalidade} = req.query
        const filtro = nacionalidade ? {nacionalidade} : {};
        try {
            const listaDiretores = await diretor.find(filtro);
            res.status(200).json({message: 'Diretores listados com sucesso', diretores: listaDiretores});
        } catch (error) {
            res.status(500).json({message: `falha ao listar diretores - ${error.message}`});
        };
    };

    static async bucasDiretorPorId (req, res){
        const id = req.params.id;
        try {
            const diretorEncontrado = await diretor.findById(id);
            res.status(200).json({message: 'Diretor encontrado', diretor: diretorEncontrado});
        } catch (error) {
            res.status(500).json({message: `falha ao buscar diretor = ${error.message}`});
        };
    };

    static async cadastrarDiretor (req, res){
        try {
            const diretorCadastrado = await diretor.create(req.body);
            res.status(201).json({message: 'Diretor cadastrado', diretor: diretorCadastrado});
        } catch (error) {
            res.status(500).json({message: `falha ao cadastrar diretor - ${error.message}`});
        };
    };

    static async atualizarDiretor (req, res){
        const id = req.params.id;
        const atualizacao = req.body;
        try {
            const diretorAtualizado = await diretor.findByIdAndUpdate(id, atualizacao, {new: true});
            res.status(200).json({message: 'Diretor atualizado com sucesso', diretor: diretorAtualizado})
        } catch (error) {
            res.status(500).json({message: `falha ao atualizar - ${error.message}`});
        };
    };

    static async removerDiretor (req, res){
        try {
            const id = req.params.id;
            const diretorRemovido = await diretor.findByIdAndDelete(id)
            res.status(200).json({message: 'Diretor removido com sucesso', diretorRemovido: diretorRemovido}); 
        } catch (error) {
            res.staus(500).json({message: `falha ao remover diretor - ${error.message}`});
        };
    };

};

export default DiretorController;
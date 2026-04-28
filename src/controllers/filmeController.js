import filme from '../models/Filmes.js';
import diretor from '../models/Diretor.js';

class FilmeController {

    static async listarFilmes(req, res) {
        // Verifica se tem filtro ou não na url antes de realizar a busca
        const {genero} = req.query;
        const filtro = genero ? {genero} : {};
        try {
            // populate() -> resolve a referência / traz os dados da coleção 'diretores' - que é referenciada pelo id em 'filmes' - para a prop 'diretor' de 'filmes'
            // exec() -> executa a query 
            const listaFilmes = await filme.find(filtro).populate("diretor").exec();
            res.status(200).json({ filmes: listaFilmes });
        } catch (error) {
            res.status(500).json({ message: `falha ao listar filmes - ${error.message}` })  ;
        };
    };

    static async buscarFilmePorId (req, res){
        const id = req.params.id;
        try {
            const filmeEncontrado = await filme.findById(id);
            res.status(200).json({message: 'Filme encontrado', filme: filmeEncontrado});
        } catch (error) {
            res.status(500).json({message: `falha ao buscar filme = ${error.message}`});
        };
    };

    static async cadastrarFilme(req, res) {
        const novoFilme = req.body;
        try {
            const filmeCadastrado = await filme.create(novoFilme);
            res.status(201).json({ message: 'Filme cadastrado com sucesso', filme: filmeCadastrado._doc });
        } catch (error) {
            res.status(500).json({ message: `falha ao cadastrar filme - ${error.message}` });
        };
    };

    static async atualizarFilme(req, res) {
        const id = req.params.id;
        const atualizacao = req.body;
        try {
            const filmeAtualizado = await filme.findByIdAndUpdate(id, atualizacao, { new: true });
            res.status(200).json({ message: 'Filme atualizado com sucesso', filmeAtualizado });
        } catch (error) {
            res.status(500).json({ message: `falha ao atualizar filme - ${error.message}` });
        };
    };

    static async removerFilme(req, res) {
        const id = req.params.id;
        try {
            const filmeRemovido = await filme.findByIdAndDelete(id);
            res.status(200).json({ message: 'Filme removido com sucesso', filmeRemovido });
        } catch (error) {
            res.status(500).json({ message: `falha ao remover filme - ${error.message}` });
        };
    };
};

export default FilmeController;
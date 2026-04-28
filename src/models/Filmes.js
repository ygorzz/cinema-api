import mongoose from 'mongoose';

const filmeSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true},
    genero: {type: String},
    anoLancamento: {type: Number},
    duracaoMinutos: {type: Number},
    diretor: {type: mongoose.Schema.Types.ObjectId, ref: "diretores", required: true} // Usando referência
}, {versionKey: false});

const filme = mongoose.model("filmes", filmeSchema);

export default filme;   
import mongoose from 'mongoose';
import {diretorSchema} from './Diretor.js'

const filmeSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true},
    genero: {type: String},
    anoLancamento: {type: Number},
    duracaoMinutos: {type: Number},
    diretor: diretorSchema
}, {versionKey: false});

const filme = mongoose.model("filmes", filmeSchema);

export default filme;   
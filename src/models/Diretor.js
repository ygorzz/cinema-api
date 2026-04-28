import mongoose from 'mongoose';

const diretorSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    nacionalidade: {type: String}
}, {versionKey: false});

const diretor = mongoose.model("diretores", diretorSchema);

export default diretor;
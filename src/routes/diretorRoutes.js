import express from 'express';
import DiretorController from '../controllers/diretorController.js';
import { diretor } from '../models/Diretor.js';

// Carrega as funcionalidades que precisamos para gerenciar e trabalhar com rotas
const routes = express.Router();

routes.get("/diretores", DiretorController.listarDiretores);
routes.get("/diretores/:id", DiretorController.bucasDiretorPorId);
routes.post("/diretores", DiretorController.cadastrarDiretor);
routes.put("/diretores/:id", DiretorController.atualizarDiretor);
routes.delete("/diretores/:id", DiretorController.removerDiretor);

export default routes;
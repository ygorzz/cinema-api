import express from 'express';
import FilmeController from "../controllers/filmeController.js";

const routes = express.Router();

routes.get("/filmes", FilmeController.listarFilmes);
routes.get("/filmes/:id", FilmeController.buscarFilmePorId)
routes.post("/filmes", FilmeController.cadastrarFilme);
routes.put("/filmes/:id", FilmeController.atualizarFilme);
routes.delete("/filmes/:id", FilmeController.removerFilme);

export default routes;
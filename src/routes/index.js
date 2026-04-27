// Receber e centraliza todas as rotas. Processa todas do mesmo modo.
import diretorRoutes from './diretorRoutes.js';
import filmeRoutes from './filmeRoutes.js';
import express from 'express';

// Inclui na instância do Express (app) um middleware e as rotas do projeto.
export default function routes(app){
    app.route('/').get((req, res) => res.status(200).json({message: 'Primeira rota'}));
    app.use(express.json(), diretorRoutes, filmeRoutes);
};
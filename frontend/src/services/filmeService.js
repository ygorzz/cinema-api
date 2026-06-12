import axios from "axios";

const filmeAPI = axios.create({baseURL: "http://localhost:3000/filmes"});

async function getFilmes(filtros){
    const response = await filmeAPI.get("/", {
        params: filtros
    })
    return response.data;
}

async function deleteFilme(id){
    const response = await filmeAPI.delete(`${id}`);
    return response.data;
}

export {
    getFilmes,
    deleteFilme
}
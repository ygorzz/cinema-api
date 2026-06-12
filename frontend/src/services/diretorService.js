import axios from "axios";

const diretorAPI = axios.create({baseURL: "http://localhost:3000/diretores"});

async function getDiretores(filtros){
    const response = await diretorAPI.get("/", {
        params: filtros
    });
    return response.data;   
}

async function deleteDiretor(id){
    const response = await diretorAPI.delete(`${id}`);
    return response.data; 
}

async function insertDiretor(diretor) {
    const response = await diretorAPI.post("/", diretor)
    console.log(response.data);
    return response.data;
}

export {
    getDiretores,
    deleteDiretor,
    insertDiretor
}
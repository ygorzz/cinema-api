import axios from "axios";

const diretorAPI = axios.create({baseURL: "http://localhost:3000/diretores"});

async function getDiretores(){
    const response = await diretorAPI.get("/");
    return response.data;
}

export {
    getDiretores
}
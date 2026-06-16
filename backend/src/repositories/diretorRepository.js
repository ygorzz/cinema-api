import {diretor} from "../models/Diretor.js";

async function findById(id){
  return await diretor.findById(id);
}

export {
  findById,
};
import styled from "styled-components";
import CardModel from "../CardModel/index.jsx";
import { Input, Form, InputSubmit, Select, Option } from "../../Inputs/index.jsx";
import Subtitle from "../Subtitle/index.jsx";
import { insertFilme } from "../../../services/filmeService.js";
import { useEffect, useState } from "react";
import { getDiretores } from "../../../services/diretorService.js";

const AddContainer = styled(CardModel)``;

function processaBusca(e) {
  const filme = {};
  const form = e.target;
  for (const input of form) {
    if (input.value !== "") {
      filme[input.name] = input.value;
    }
  }
  return filme; 
}

function AddCard() {
  const [diretores, setDiretores] = useState([])
  
  useEffect(() => {
    async function fetchDiretores(){
      try {
        const data = await getDiretores();
        setDiretores(data.result);
      } catch (error) {
        console.log(error);
        alert("Erro ao carregar diretores. Tente novamente");
      }
    }

    fetchDiretores()  
  }, [])

  async function handleInsertFilme(e){
    e.preventDefault()
    try {
      const filme = processaBusca(e)
      console.log(filme.diretor);
      const data = await insertFilme(filme);
      alert(data.message);
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <AddContainer titulo="Adicionar Filme">
      <Subtitle subtitle="Dados" />
      <Form onSubmit={handleInsertFilme} >
        <Input placeholder="Titulo" name="titulo" required />
        <Input placeholder="Gênero" name="genero" />
        <Input placeholder="Ano de Lançamento" name="anoLancamento" />
        <Input placeholder="Duração em Minutos" name="duracaoMinutos" />
        <Select name="diretor" required >
          <Option value="" key="default" disabled selected >Diretor</Option>
          {diretores.map(diretor => {
            return (
              <Option key={diretor._id} value={diretor._id}>{diretor.nome}</Option>
            )
          })} 
        </Select>
        <InputSubmit defaultValue="Adicionar" />
      </Form>
    </AddContainer>
  );
}

export default AddCard;

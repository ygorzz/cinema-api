import styled from "styled-components";
import CardModel from "../../CardModel/index.jsx";
import { Input, Form, InputSubmit } from "../../../Inputs/index.jsx";
import Subtitle from "../../Subtitle/index.jsx";
import { insertDiretor } from "../../../../services/diretorService.js";

const AddContainer = styled(CardModel)``;

function processaBusca(e) {
  const diretor = {};
  const form = e.target;
  for (const input of form) {
    if (input.value !== "") {
      diretor[input.name] = input.value;
    }
  }
  return diretor;
}

function AddCard() {
    
  async function handleInsertDiretor(e) {
    e.preventDefault();
    try {
      const diretor = processaBusca(e);
      const data = await insertDiretor(diretor);
      alert(data.message);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  }

  return (
    <AddContainer titulo="Adicionar Diretor">
      <Subtitle subtitle="Dados" />
      <Form onSubmit={handleInsertDiretor}>
        <Input placeholder="Nome" name="nome" required />
        <Input placeholder="Nacionalidade" name="nacionalidade" />
        <InputSubmit defaultValue="Adicionar" />
      </Form>
    </AddContainer>
  );
}

export default AddCard;

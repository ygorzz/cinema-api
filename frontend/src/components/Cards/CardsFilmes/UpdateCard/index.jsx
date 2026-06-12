import styled from "styled-components";
import CardModel from "../../CardModel/index.jsx";
import {
  Input,
  Form,
  InputSubmit,
  Select,
  Option,
} from "../../../Inputs/index.jsx";
import Subtitle from "../../Subtitle/index.jsx";
import { updateFilme } from "../../../../services/filmeService.js";
import { useEffect, useState } from "react";
import { getDiretores } from "../../../../services/diretorService.js";

const UpdateContainer = styled(CardModel)``;

function processaBusca(e) {
  const atualizacao = {};
  const form = e.target;
  for (const input of form) {
    if (input.value !== "") {
      atualizacao[input.name] = input.value;
    }
  }
  return atualizacao;
}

function UpdateCard() {
  const [diretores, setDiretores] = useState([]);

  useEffect(() => {
    async function fetchDiretores() {
      try {
        const data = await getDiretores();
        setDiretores(data.result);
      } catch (error) {
        console.log(error);
        alert("Erro ao carregar diretores. Tente novamente");
      }
    }

    fetchDiretores();
  }, []);


  // eslint-disable-next-line no-unused-vars
  async function handleUpdateFilme(e) {
    try {
      const atualizacao = processaBusca(e);
      const data = await updateFilme(atualizacao);
      alert(data.message);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  }

  return (
    <UpdateContainer titulo="Atualizar Filme">
      <Subtitle subtitle="Filme a Atuallizar" />
      <Form>
        <Input placeholder="Titulo" />
      </Form>
      <Subtitle subtitle="Alterações " />
      <Form>
        <Input placeholder="Titulo" />
        <Input placeholder="Gênero" />
        <Input placeholder="Ano de Lançamento" />
        <Input placeholder="Duração em Minutos" />
        <Input placeholder="Diretor" />
        <Select name="diretor" required>
          <Option value="" key="default" disabled selected>
            Diretor
          </Option>
          {diretores.map((diretor) => {
            return (
              <Option key={diretor._id} value={diretor._id}>
                {diretor.nome}
              </Option>
            );
          })}
        </Select>
        <InputSubmit defaultValue="Atualizar" />
      </Form>
    </UpdateContainer>
  );
}

export default UpdateCard;

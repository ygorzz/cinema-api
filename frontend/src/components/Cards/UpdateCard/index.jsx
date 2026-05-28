import styled from "styled-components";
import CardModel from "../CardModel/index.jsx";
import { Input, InputContainer, InputSubmit } from "../../Inputs/index.jsx";
import Subtitle from "../Subtitle/index.jsx";

const UpdateContainer = styled(CardModel)``;

function UpdateCard() {
  return (
    <UpdateContainer titulo="Atualizar Filme">
      <Subtitle subtitle="Id do Filme" />
      <InputContainer>
        <Input placeholder="ID" />
      </InputContainer>
      <Subtitle subtitle="Dados" />
      <InputContainer>
        <Input placeholder="Titulo" />
        <Input placeholder="Gênero" />
        <Input placeholder="Ano de Lançamento" />
        <Input placeholder="Duração em Minutos" />
        <Input placeholder="Diretor" />
        <InputSubmit value="Atualizar" />
      </InputContainer>
    </UpdateContainer>
  );
}

export default UpdateCard;

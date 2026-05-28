import styled from "styled-components";
import CardModel from "../CardModel/index.jsx";
import { Input, InputSubmit } from "../../Inputs/index.jsx";

const UpdateContainer = styled(CardModel)``;

function UpdateCard() {
  return (
    <UpdateContainer titulo="Atualizar Filme">
      <Input placeholder="ID" />
      <Input placeholder="Titulo" />
      <Input placeholder="Gênero" />
      <Input placeholder="Ano de Lançamento" />
      <Input placeholder="Duração em Minutos" />
      <Input placeholder="Diretor" />
      <InputSubmit value="Atualizar" />
    </UpdateContainer>
  );
}

export default UpdateCard;

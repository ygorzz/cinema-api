import styled from "styled-components";
import CardModel from "../CardModel/index.jsx";
import { Input, InputContainer, InputSubmit } from "../../Inputs/index.jsx";
import Subtitle from "../Subtitle/index.jsx";

const DeleteContainer = styled(CardModel)``;

function DeleteCard() {
  return (
    <DeleteContainer titulo="Remover Filme">
      <Subtitle subtitle="Id do Filme" />
      <InputContainer>
        <Input placeholder="ID" />
        <InputSubmit value="Remover" />
      </InputContainer>
    </DeleteContainer>
  );
}

export default DeleteCard;

import styled from "styled-components";
import CardModel from "../CardModel/index.jsx";
import { Input, InputContainer, InputSubmit } from "../../Inputs/index.jsx";
import Subtitle from "../Subtitle/index.jsx";

const ListContainer = styled(CardModel)``;

function ListCard() {
  return (
    <ListContainer titulo="Listar Filmes">
      <Subtitle subtitle="Filtros"></Subtitle>
      <InputContainer>
        <Input placeholder="ID" />
        <Input placeholder="Título" />
        <Input placeholder="Gênero" />
        <Input placeholder="Diretor" />
        <Input placeholder="Ano de Lançamento" />
        <InputSubmit value="Buscar" />
      </InputContainer>
    </ListContainer>
  );
}

export default ListCard;

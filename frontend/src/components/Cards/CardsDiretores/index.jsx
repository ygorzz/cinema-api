import styled from "styled-components";
import ListCard from "./ListCard/index.jsx";
import AddCard from "./AddCard/index.jsx";
import { useState } from "react";

const CardsContainer = styled.div`
  display: flex;
  margin: auto;
  height: 100%;
  width: 100%;
`;

function CardsDiretores() {
  const [diretorToUpdate, setDiretorToUpdate] = useState(null);

  return (
    <CardsContainer>
      <ListCard setDiretorToUpdate={setDiretorToUpdate} />
      <AddCard  diretorToUpdate={diretorToUpdate} setDiretorToUpdate={setDiretorToUpdate}/>
    </CardsContainer>
  );
}

export default CardsDiretores;

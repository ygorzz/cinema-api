import styled from "styled-components";
import ListCard from "./ListCard/index.jsx";
import AddCard from "./AddCard/index.jsx";

const CardsContainer = styled.div`
  display: flex;
  margin: auto;
  height: 100%;
  width: 100%;
`;

function CardsDiretores() {
  return (
    <CardsContainer>
      <ListCard />
      <AddCard />
    </CardsContainer>
  );
}

export default CardsDiretores;

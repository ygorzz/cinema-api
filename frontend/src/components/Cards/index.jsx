import styled from "styled-components";
import ListCard from "./ListCard/index.jsx";
import AddCard from "./AddCard/index.jsx";
import UpdateCard from "./UpdateCard/index.jsx";

const CardsContainer = styled.div`
  display: flex;
  margin: auto;
  height: 100%;
  width: 100%;
`;

function Cards() {
  return (
    <CardsContainer>
      <ListCard />
      <AddCard />
      <UpdateCard />
    </CardsContainer>
  );
}

export default Cards;

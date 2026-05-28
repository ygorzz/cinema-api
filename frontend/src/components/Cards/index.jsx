import styled from "styled-components";
import ListCard from "./ListCard/index.jsx";
import AddCard from "./AddCard/index.jsx";
import UpdateCard from "./UpdateCard/index.jsx";
import DeleteCard from "./DeleteCard/index.jsx";

const CardsContainer = styled.div`
  display: flex;
  margin: auto;
  height: 100%;
  width: 100%;
  /* border: 1px solid #fff; */
`;

function Cards() {
  return (
    <CardsContainer>
      <ListCard />
      <AddCard />
      <UpdateCard />
      <DeleteCard />
    </CardsContainer>
  );
}

export default Cards;

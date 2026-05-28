import styled from "styled-components";
import Header from "../CardHeader/index.jsx";
import CardBody from "../CardBody/index.jsx";

const Card = styled.div`
  margin: 40px;
  height: calc(100% - 80px);
  width: 25%;
  box-shadow: 0 4px 16px rgba(255, 253, 253, 0.15);
`;

function CardModel({ titulo, children }) {
  return (
    <Card>
      <Header titulo={titulo}></Header>
      <CardBody children={children} />
    </Card>
  );
}

export default CardModel;

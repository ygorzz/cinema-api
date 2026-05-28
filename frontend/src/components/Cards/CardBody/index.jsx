import styled from "styled-components";

const BodyContainer = styled.div`
  height: calc(100% - 70px);
  margin: 20px;
`;


function CardBody({ children }) {
  return (
    <BodyContainer>
      {children}
    </BodyContainer>
  );
}

export default CardBody;

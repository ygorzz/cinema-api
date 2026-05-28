import styled from "styled-components";

const BodyContainer = styled.div`
  height: calc(100% - 70px);
  margin: 20px;
`;

const FiltersContainer = styled.div``;

const FilterTitle = styled.h3`
  color: #fff;
  font-size: 22px;
  font-weight: 100;
`;

const FilterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

function CardBody({ children }) {
  return (
    <BodyContainer>
      <FiltersContainer>
        <FilterTitle>Filtros</FilterTitle>
        <FilterContent>{children}</FilterContent>
      </FiltersContainer>
    </BodyContainer>
  );
}

export default CardBody;

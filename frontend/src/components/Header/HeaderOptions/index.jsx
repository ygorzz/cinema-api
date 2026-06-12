import { Link } from "react-router-dom";
import styled from "styled-components";

const Options = styled.ul`
  display: flex;
  cursor: pointer;
`;

const Option = styled.li`
`;

function HeaderOptions() {
  return (
    <Options>
      <Link to={"/filmes"}>
        <Option>Filmes</Option>
      </Link>
      <Link to={"/diretores"}>
        <Option>Diretores</Option>
      </Link>
    </Options>
  );
}

export default HeaderOptions;

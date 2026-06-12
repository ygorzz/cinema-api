import styled from "styled-components";
import Cards from "../components/Cards/index.jsx";

const DiretoresContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function Diretores() {
  return (
    <DiretoresContainer>
      <Cards />
    </DiretoresContainer>
  )
}

export default Diretores;
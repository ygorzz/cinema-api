import styled from "styled-components";
import Cards from "../components/Cards/CardsFilmes/index.jsx";

const FilmesContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function Filmes() {
  return (
    <FilmesContainer>
      <Cards />
    </FilmesContainer>
  )
}

export default Filmes;
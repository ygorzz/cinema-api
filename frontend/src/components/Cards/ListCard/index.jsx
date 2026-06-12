import styled from "styled-components";
import CardModel from "../CardModel/index.jsx";
import { Input, Form, InputSubmit } from "../../Inputs/index.jsx";
import Subtitle from "../Subtitle/index.jsx";
import { deleteFilme, getFilmes } from "../../../services/filmeService.js";
import { useState } from "react";
import { Trash } from "lucide-react"

const ListContainer = styled(CardModel)``;

const ResultadoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Resultado = styled.div`
display: flex;
align-items: center;
gap: 5px;
  color: white;
  p {
    font-size: 18px;
  }
  button {
    background: none;
    height: 20px;
    cursor: pointer;
  }
  cursor: pointer;
  &:hover {
    border: 1px solid white;
  }
`;

function processaBusca(e) {
  const filtros = {};
  const form = e.target;
  for (const input of form) {
    if (input.value !== "") {
      filtros[input.name] = input.value;
    }
  }
  return filtros;
}

function ListCard() {
  const [filmes, setFilmes] = useState([]);
  const [mensagem, setMensagem] = useState(null);

  async function handleGetFilmes(e) {
    e.preventDefault();
    try {
      setFilmes([]);
      setMensagem(null);
      const filtros = processaBusca(e);
      const data = await getFilmes(filtros);
      data.result.length === 0
        ? setMensagem(data.message)
        : setFilmes(data.result);
    } catch (error) {
      setMensagem(error.response.data.message);
    }
  }

  async function handleDeleteFilme(id) {
    const data = await deleteFilme(id);
    console.log(data);
    alert(data.message);
  }

  function renderResultado(filmes, mensagem) {
    if (filmes.length > 0) {
      return (
        <ResultadoContainer>
          {filmes.map((filme) => {
            return (
              <Resultado> 
                <p key={filme.id}>
                  {filme.titulo}
                </p>
                <button onClick={() => handleDeleteFilme(filme._id)}>
                  <Trash 
                    size={18} 
                    color="white"
                    strokeWidth={2}
                  />
                </button>
              </Resultado>
            );
          })}
        </ResultadoContainer>
      );
    } else if (mensagem) {
      return (
        <Resultado>
          <p>{mensagem}</p>
        </Resultado>
      );
    } else {
      return null;
    }
  }

  return (
    <ListContainer titulo="Listar Filmes">
      <Subtitle subtitle="Filtros"></Subtitle>
      <Form onSubmit={handleGetFilmes}>
        <Input placeholder="Título" name="titulo" />
        <Input placeholder="Gênero" name="genero" />
        <Input placeholder="Diretor" name="diretor" />
        <Input placeholder="Ano de Lançamento" name="anoLancamento" />
        <Input placeholder="Ordenar" name="ordenacao" />
        <InputSubmit value="Buscar" />
      </Form>
      {renderResultado(filmes, mensagem)}
    </ListContainer>
  );
}

export default ListCard;

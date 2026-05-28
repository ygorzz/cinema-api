import styled from "styled-components";
import CardModel from "../CardModel/index.jsx";
import {Input, InputSubmit} from "../../Inputs/index.jsx";

const ListContainer = styled(CardModel)`
    
`

function ListCard(){
    return (
        <ListContainer titulo="Listar Filmes">
            <Input placeholder="ID"/>
            <Input placeholder="Título"/>
            <Input placeholder="Gênero"/>
            <Input placeholder="Diretor"/>
            <Input placeholder="Ano de Lançamento" />
            <InputSubmit value="Buscar"/>
        </ListContainer>
    )
}

export default ListCard;
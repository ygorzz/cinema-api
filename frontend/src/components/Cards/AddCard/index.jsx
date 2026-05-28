import styled from "styled-components";
import CardModel from "../CardModel/index.jsx";
import { Input, InputSubmit } from "../../Inputs/index.jsx";

const AddContainer = styled(CardModel)`
    
`

function AddCard(){
    return (
        <AddContainer titulo="Adicionar Filme">
            <Input placeholder="Titulo"/>
            <Input placeholder="Gênero"/>
            <Input placeholder="Ano de Lançamento"/>
            <Input placeholder="Duração em Minutos"/>
            <Input placeholder="Diretor"/>
            <InputSubmit value="Adicionar"/>
        </AddContainer>
    )
}

export default AddCard;
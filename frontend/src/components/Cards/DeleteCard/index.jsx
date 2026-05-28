import styled from "styled-components";
import CardModel from "../CardModel/index.jsx";
import { Input, InputSubmit } from "../../Inputs/index.jsx";

const DeleteContainer = styled(CardModel)`
    
`

function DeleteCard(){
    return (
        <DeleteContainer titulo="Remover Filme">
            <Input placeholder="ID"/>
            <InputSubmit value="Remover"/>
        </DeleteContainer>
    )
}

export default DeleteCard;
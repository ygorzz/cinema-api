import styled from "styled-components";

const InputElement = styled.input`
    height: 35px;
    width: 48%;
    font-size: 20px;
    border-radius: 10px;
`


const InputSubmitElement = styled(InputElement)`
    height: 40px;
    width: 100%;
    margin: 20px 0px;
    cursor: pointer;
`

export function Input({placeholder, type, value}){
    return (
        <InputElement 
            placeholder={placeholder}
            type={type}
            value={value}
        />
    )
}

export function InputSubmit({placeholder, value}){
    return (
        <InputSubmitElement
            placeholder={placeholder}
            type="submit"
            value={value}
        />
    )
}

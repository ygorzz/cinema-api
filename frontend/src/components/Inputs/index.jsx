import styled from "styled-components";

const FormElement = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const InputElement = styled.input`
  height: 35px;
  width: 48%;
  font-size: 20px;
  border-radius: 9px;
  background-color: #f0f0f0;
`;

const ButtonElement = styled.button`
  height: 40px;
  width: 100%;
  margin: 20px 0px;
  cursor: pointer;
  background-color: ${props => props.color || "white" };
  font-size: 20px;
  border-radius: 9px;
`;

const SelectElement = styled.select`
  height: 35px;
  width: 49%;
  font-size: 20px;
  border-radius: 9px;
  background-color: #f0f0f0;
`;

const OptionElement = styled.option`
  
`

export function Form({ children, ...props}) {
  return <FormElement {...props}>{children}</FormElement>;
}

export function Input({ ...props }) {
  return (
    <InputElement {...props} />
  );
}
  
export function Button({ ...props }) {
  return (
    <ButtonElement {...props} />
  );
}

export function Select({children, ...props}) {
  return <SelectElement {...props}>{children}</SelectElement>;
}

export function Option({children, ...props}) {
  return <OptionElement {...props}>{children}</OptionElement>;
}

import styled from "styled-components";

const SubtitleElement = styled.h2`
  color: #fff;
  font-size: 22px;
  font-weight: 100;
`;

function Subtitle({subtitle}){
    return(
        <SubtitleElement>{subtitle}</SubtitleElement>
    )
}

export default Subtitle;
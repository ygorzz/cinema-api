import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h2`
    font-size: 36px;
    cursor: pointer;
`

function Logo(){
    return (
        <Link to="/filmes">
            <Title>CinemaAPI</Title>
        </Link>
    )
}

export default Logo;
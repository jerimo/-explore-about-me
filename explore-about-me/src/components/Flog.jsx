import React from 'react';
import styled from "styled-components";

function Flog () {

    return (
        <Planet>Flog 행성</Planet>
    )
}

const Planet = styled.div`
    position: absolute;
    right: 0;
    bottom: 50%;
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
    background-color: pink;
`;

export default Flog;
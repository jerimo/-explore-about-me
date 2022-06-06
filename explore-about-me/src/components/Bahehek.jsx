import React from 'react';
import styled from "styled-components";

function Bahehek () {

    return (
        <Planet>바흐흑 행성</Planet>
    )
}

const Planet = styled.div`
    position: absolute;
    bottom: 30%;
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    background-color: yellow;
`;

export default Bahehek;
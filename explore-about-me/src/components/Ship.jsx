import React from 'react';
import styled, {keyframes} from "styled-components";

function Ship({ moveToX, moveToY }) {
    console.log(moveToX, moveToY)
    return (
        <Spaceship x={moveToX} y={moveToY} >
            우주선
        </Spaceship>
    );
}


const move = keyframes`
0%{
    background:pink;
}

50%{
    opacity: 0.5;
}

100%{
    bottom: ${props => props.y ? `${props.y}%` : '0'};
    left: ${props => props.y ? `${props.x}%` : '50%'};
    opacity: 1;
}
`

const Spaceship = styled.div`
    z-index: 9999;
    background-color: #94bde3;
    width: 3rem;
    height: 2rem;
    position: absolute;
    bottom: ${props => props.y ? `${props.y}%` : '0'};
    left: ${props => props.y ? `${props.x}%` : '50%'};
    animation: ${move} 2s infinite;
`;


export default Ship;
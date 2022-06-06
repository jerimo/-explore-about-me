import React, { useState } from 'react';
import './App.css';
import styled from "styled-components";
import Ship from './components/Ship';
import Bahehek from './components/Bahehek';
import Flog from './components/Flog';

function App() {
  const [x, setX] = useState(50);
  const [y, setY] = useState(0);
  const handleClickPlanet = (positionX, positionY) => {
    // spaceship 이동
    // console.log(relativeY)
    console.log('**')
    setX(positionX);
    setY(positionY);
  }

  return (
    <Map>
      <div onClick={() => handleClickPlanet(0, 30)} >
      <Bahehek />
      </div>
      <div onClick={() => handleClickPlanet(80, 50)} >
      <Flog />
      </div>
      <Ship moveToX={x} moveToY={y} />
    </Map>
  );
}

const Map = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export default App;

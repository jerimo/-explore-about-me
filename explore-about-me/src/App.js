import React, { useState, useRef } from 'react';
import './App.css';
import styled from "styled-components";
import Ship from './components/Ship';
import Bahehek from './components/Bahehek';
import Flog from './components/Flog';

function App() {
  const [x, setX] = useState(50);
  const [y, setY] = useState(0);
  const mapRef = useRef();
  const handleClickPlanet = (positionX, positionY) => {
    // spaceship 이동
    // console.log(relativeY)
    console.log('**')
    setX(positionX);
    setY(positionY);
  }

  const handleClickMap = (e) => {
    const mapWidth = mapRef.current.clientWidth;
    const mapHeight = mapRef.current.clientHeight;
    const mouseX = e.clientX;
    const mouseY = mapHeight - e.clientY;

    console.log(Math.round(mouseX/mapWidth * 100))
    console.log(Math.round(mouseY/mapHeight * 100))
    setX(Math.round(mouseX/mapWidth * 100));
    setY(Math.round(mouseY/mapHeight * 100));
  }

  return (
    <Map ref={mapRef} onClick={handleClickMap}>
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

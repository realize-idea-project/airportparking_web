import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { generateMap, generateMarker } from './helpers';


interface Props {
  lat: number;
  lng: number;
}

export const CustomMap: FC<Props> = ({ lat, lng }) => {

  useEffect(() => {
    const map = generateMap(lat, lng);
    generateMarker(map, lat, lng);
    window.removeEventListener("wheel", () => null, false)
  }, []);

  return (
    <Container>
      <MapComponent id='map' />
    </Container>
  );
};

const Container = styled.div``;

const MapComponent = styled.div`
  width: 100%;
  height: 80vw;
  border: 1px solid purple;
`;
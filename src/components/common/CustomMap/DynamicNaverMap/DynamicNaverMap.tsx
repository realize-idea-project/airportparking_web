import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { generateMap, generateMarker } from './helpers';

interface Props {
  lat: number;
  lng: number;
}

export const DynamicNaverMap: FC<Props> = ({ lat, lng }) => {

  useEffect(() => {
    const map = generateMap(lat, lng);
    generateMarker(map, lat, lng);
  }, []);

  return (
    <Container>
      <MapComponent id='map' />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const MapComponent = styled.div`
  width: 90%;
  height: 70vw;
`;
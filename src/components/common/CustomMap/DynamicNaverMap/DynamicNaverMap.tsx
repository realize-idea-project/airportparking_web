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

const Container = styled.div``;

const MapComponent = styled.div`
  width: 100%;
  height: 80vw;
`;
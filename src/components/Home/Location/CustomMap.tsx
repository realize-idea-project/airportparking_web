import React, { FC, useEffect } from 'react';
import styled from 'styled-components';

import { RouterPathType } from '../../../types';
import { RouterPath } from '../../../constants';
import { Blank } from '../../common';
import { HomeContentsContainer, HomeContentHeader } from '../common';

console.log(window.naver, '@@')

const { LatLng, Map } = window.naver.maps;

const mapOptions = {
  center: new LatLng(37.3595704, 127.105399),
  zoom: 10
}

export const CustomMap = () => {

  useEffect(() => {
    const init = new Map('map', mapOptions);
  })

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
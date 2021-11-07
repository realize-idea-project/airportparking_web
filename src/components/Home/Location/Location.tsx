import React, { FC } from 'react';
import styled from 'styled-components';
import {
  mainAddress,
  subAddress,
  parkinglotLatitude,
  parkinglotLongitude
} from '../../../business';
import { RouterPathType } from '../../../types';
import { RouterPath } from '../../../constants';
import { Blank, DynamicNaverMap } from '../../common';
import { HomeContentsContainer, HomeContentHeader } from '../common';


interface Props {
  onClickShowMore: (path: RouterPathType) => () => void;
}

export const Location: FC<Props> = ({ onClickShowMore }) => {
  return (
    <HomeContentsContainer>
      <Blank height={5} />
      <HomeContentHeader
        subTitle='주차장 위치'
        title='PARKING LOCATION'
        // FIX-ROUTER
        // onClickShowMore={onClickShowMore(RouterPath.Instruction)}
        onClickShowMore={onClickShowMore(RouterPath.Home)}
      />
      <Blank height={3} />
      <DynamicNaverMap lat={parkinglotLatitude} lng={parkinglotLongitude} />
      <Blank height={3} />
      <Address>
        {`위치: ${mainAddress}${subAddress}`}
      </Address>
      <Blank height={8} />
    </HomeContentsContainer>
  );
};

const Address = styled.div`
  font-size: 2.8vw;
`;

import React, { FC } from 'react';
import styled from 'styled-components';
import { RouterPathType } from '../../../types';
import { RouterPath } from '../../../constants';
import { Blank, DynamicNaverMap } from '../../common';
import { HomeContentsContainer, HomeContentHeader } from '../common';


const parkinglotLatitude = 37.56058699108043;
const parkinglotLongitude = 126.82759124822755;

const companyAddress1 = '서울특별시 강서구 마곡중앙로 76, 지하5층';
const companyAddress2 = '(마곡동, 힐스테이트에코 마곡역)';
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
        {`위치: ${companyAddress1}${companyAddress2}`}
      </Address>
      <Blank height={8} />
    </HomeContentsContainer>
  );
};

const Address = styled.div`
  font-size: 2.8vw;
`;

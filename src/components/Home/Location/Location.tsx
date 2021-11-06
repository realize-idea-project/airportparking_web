import React, { FC } from 'react';
import { RouterPathType } from '../../../types';
import { RouterPath } from '../../../constants';
import { Blank, CustomMap } from '../../common';
import { HomeContentsContainer, HomeContentHeader } from '../common';


const parkinglotLatitude = 37.56058699108043;
const parkinglotLongitude = 126.82759124822755;
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
        onClickShowMore={onClickShowMore(RouterPath.Instruction)}
      />
      <Blank height={3} />
      <CustomMap lat={parkinglotLatitude} lng={parkinglotLongitude} />
      <Blank height={8} />
    </HomeContentsContainer>
  );
};

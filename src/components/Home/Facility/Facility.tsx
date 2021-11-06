import React, { FC } from 'react';
import { RouterPathType } from '../../../types';
import { RouterPath } from '../../../constants';
import { Blank } from '../../common';
import { HomeContentsContainer, HomeContentHeader } from '../common';

import { FacilityCarousel } from './FacilityCarousel';
import { AbsoluteBackgroundText } from './BackgroundText';

interface Props {
  imagelist: string[];
  onClickShowMore: (path: RouterPathType) => () => void;
}

export const Facility: FC<Props> = ({ imagelist, onClickShowMore }) => {
  return (
    <HomeContentsContainer white >
      <AbsoluteBackgroundText />
      <Blank height={5} />
      <HomeContentHeader
        subTitle='라라주차 김포 주차시설'
        title='PARKING FACILITY'
        // FIX-ROUTER
        // onClickShowMore={onClickShowMore(RouterPath.Facility)}
        onClickShowMore={onClickShowMore(RouterPath.Home)}
      />
      <Blank height={3} />
      <FacilityCarousel imagelist={imagelist} />
      <Blank height={8} />
    </HomeContentsContainer>
  );
};

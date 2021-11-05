import React, { FC } from 'react';
import { RouterPathType } from '../../../types';
import { RouterPath } from '../../../constants';
import { Blank } from '../../common';
import { HomeContentsContainer, HomeContentHeader } from '../common';

interface Props {
  onClickShowMore: (path: RouterPathType) => () => void;
}

export const Location: FC<Props> = ({ onClickShowMore }) => {
  return (
    <HomeContentsContainer>
      <Blank height={5} />
      <HomeContentHeader
        subTitle='오시는길'
        title='PARKING LOCATION'
        onClickShowMore={onClickShowMore(RouterPath.Instruction)}
      />
      <Blank height={3} />
      <Blank height={8} />
    </HomeContentsContainer>
  );
};

/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import styled from 'styled-components';
import { AirportType } from '../../../types';
import { Blank } from '../../common';
import { HomeContentsContainer } from '../styled';
import { ReservationStatusHeader } from './ReservationStatusHeader';
import { ReservationStatusItem } from './ReservationStatusItem';


interface Props {
  airportType?: AirportType
}

export const ReservationStatus: FC<Props> = ({ airportType = 'Gimpo' }) => {

  const subTitle = airportType === 'Gimpo' ? '김포공항 주차예약' : '인천공항 주차예약';

  return (
    <HomeContentsContainer>
      <Blank height={5} />
      <ReservationStatusHeader subTitle={subTitle} />
      <Blank height={5} />
      <ReservationStatusItem />
    </HomeContentsContainer>
  );
};

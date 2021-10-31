/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import styled from 'styled-components';
import { AirportType } from '../../../types';
import { color } from '../../../constants'
import { Blank } from '../../common';
import { HomeContentsContainer } from '../styled';
import { ReservationStatusHeader } from './ReservationStatusHeader';

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
      <ItemContainer>
        h
      </ItemContainer>
    </HomeContentsContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;

  border: 2px solid ${color.gray_150};
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MonthText = styled.div``;

const DateText = styled.div`
  background-color: ${color.red};
  color: white;
`;
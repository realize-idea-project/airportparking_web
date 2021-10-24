import React, { FC } from 'react';
import styled from 'styled-components';
import { AirportType } from '../../../types';
import { Blank } from '../../common';

import { px } from '../../../utils';

interface Props {
  airportType: AirportType;
}

const headerByAirport: Record<AirportType, string> = {
  Gimpo: '김포공항 주차예약',
  Incheon: '인천공항 주차예약',
};

export const ReservationHeader: FC<Props> = ({ airportType }) => {

  return (
    <Container>
      <Title>{headerByAirport[airportType]}</Title>
      <Blank height={5} />
      <SubTitle>RARA Airport Parking Service</SubTitle>
    </Container>
  )
};

const Container = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${px(120)};
`;

const Title = styled.div`
  font-size: ${px(20)};
`;

const SubTitle = styled.div`
  font-size: ${px(14)};
`;
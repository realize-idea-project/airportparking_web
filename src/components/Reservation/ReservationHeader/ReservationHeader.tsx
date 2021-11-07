import React, { FC } from 'react';
import styled from 'styled-components';
import { AirportType } from '../../../types';
import { Blank } from '../../common';

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
      <Blank height={1} />
      <SubTitle>RARA Airport Parking Service</SubTitle>
    </Container>
  )
};

const Container = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25vw;
`;

const Title = styled.div`
  font-size: 6vw;
`;

const SubTitle = styled.div`
  font-size: 4.5vw;
`;
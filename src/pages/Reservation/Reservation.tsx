import React from 'react';
import styled from 'styled-components';

import { AirportType } from '../../types';
import { withLayout } from '../../shared';
import { color } from '../../constants';
import { PageContainer, Blank } from '../../components/common';
import { ReservationHeader, ServiceUsePeriod, Notifications } from '../../components/Reservation';

const GimpoAirport: AirportType = "Gimpo"

// px REMOVE
export const Reservation = withLayout(() => {
  return (
    <PageContainer>
      <ReservationHeader airportType={GimpoAirport}/>
      <GrayBackground>
        <Blank height={5} />
        <ServiceUsePeriod />
        <Blank height={5} />
        <Notifications />
        <Blank height={5} />
        <CalculateButton>실시간 요금 계산</CalculateButton>
        <Blank height={5} />
      </GrayBackground>

      <Blank height={5} />
    </PageContainer>
  );
});

const GrayBackground = styled.div`
  padding: 0 6vw;
  background-color: ${color.gray_100};
`;

const CalculateButton = styled.div`
  color: white;
  background-color: black;
  text-align: center;
  padding: 4vw 0;
  font-size: 4.5vw;
`;

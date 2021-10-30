import React from 'react';
import styled from 'styled-components';

import { ScreenBreakPoint } from '../../constants';
import { AirportType } from '../../types';
import { withLayout } from '../../shared';
import { px } from '../../utils';
import { ReservationHeader, ServiceUsePeriod } from '../../components/Reservation';

const GimpoAirport: AirportType = "Gimpo"

const { MobileS, MobileM } = ScreenBreakPoint;

export const Reservation = withLayout(() => {
  return (
    <Container>
      <ReservationHeader airportType={GimpoAirport}/>
      <ServiceUsePeriod />
    </Container>
  );
});

const Container = styled.div`

@media only screen and (${ MobileS }) {
  padding-top: 50px;
  }

  @media only screen and (${ MobileM }) {
    padding-top: 50px;
  }
`;
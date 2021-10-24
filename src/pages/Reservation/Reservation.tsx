import React from 'react';
import styled from 'styled-components';

import { ScreenBreakPoint } from '../../constants';
import { AirportType } from '../../types';
import { withLayout } from '../../shared';
import { px } from '../../utils';
import { ReservationHeader, ServiceUsePeriod } from '../../components/Reservation';

const GimpoAirport: AirportType = "Gimpo"

const { Mobile } = ScreenBreakPoint;

export const Reservation = withLayout(() => {
  return (
    <Container>
      <ReservationHeader airportType={GimpoAirport}/>
      <ServiceUsePeriod />
    </Container>
  );
});

const Container = styled.div`


  @media only screen and (max-width: ${px(Mobile)}) {
    padding-top: ${px(50)};
  }
`;
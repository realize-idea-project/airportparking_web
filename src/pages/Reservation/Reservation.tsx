import React from 'react';
import styled from 'styled-components';

import { ScreenBreakPoint } from '../../constants';
import { AirportType } from '../../types';
import { withLayout } from '../../shared';
import { PageContainer } from '../../components/common';
import { ReservationHeader, ServiceUsePeriod } from '../../components/Reservation';

const GimpoAirport: AirportType = "Gimpo"

// px REMOVE
export const Reservation = withLayout(() => {
  return (
    <PageContainer>
      <ReservationHeader airportType={GimpoAirport}/>
      <ServiceUsePeriod />
    </PageContainer>
  );
});

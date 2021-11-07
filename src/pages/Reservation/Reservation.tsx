import React, { useState } from 'react';
import styled from 'styled-components';

import { AirportType, ChangeEvent } from '../../types';
import { withLayout } from '../../shared';
import { color } from '../../constants';
import { PageContainer } from '../../components/common';

import { ReservationHeader, ServiceUsePeriod, PriceModal } from '../../components/Reservation';
import { getInitailFromToDate } from './helpers';

const GimpoAirport: AirportType = "Gimpo";

export const Reservation = withLayout(() => {
  const [isPriceModalOpened, setIsPriceModalOpened] = useState(false);
  const [frmoToDate, setFromToDate] = useState(getInitailFromToDate());

  
  const changeServiceUsePeriod = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFromToDate((prev) => ({ ...prev, [name]: value }));
  };

  console.log('frmoToDate', frmoToDate)
  return (
    <>
      <PageContainer>
        <ReservationHeader airportType={GimpoAirport}/>
        <ServiceUsePeriod
          dateFromYmdhm={frmoToDate.dateFrom}
          dateToYmdhm={frmoToDate.dateTo}
          onChangeDate={changeServiceUsePeriod}
        />
      </PageContainer>
      {isPriceModalOpened && <PriceModal />}
    </>
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

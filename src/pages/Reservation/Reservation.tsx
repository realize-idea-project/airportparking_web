import React, { useState } from 'react';
import styled from 'styled-components';

import { AirportType, ChangeEvent } from '../../types';
import { withLayout } from '../../shared';
import { color } from '../../constants';
import { PageContainer, useModal } from '../../components/common';

import { ReservationHeader, ServiceUsePeriod, PriceModal } from '../../components/Reservation';
import { getInitailFromToDate } from './helpers';

const GimpoAirport: AirportType = "Gimpo";

export const Reservation = withLayout(() => {
  const [frmoToDate, setFromToDate] = useState(getInitailFromToDate());
  const { isModalOpened, openModal, closeModal } = useModal();

  
  const changeServiceUsePeriod = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    // if dateTo is earlier than dateFrom then alert!!
    // delete code duplication in ServiceUsePeriodInput.tsx
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
          onClickCalculationButton={openModal}
        />
      </PageContainer>
      {isModalOpened && <PriceModal onClose={closeModal} />}
    </>
  );
});

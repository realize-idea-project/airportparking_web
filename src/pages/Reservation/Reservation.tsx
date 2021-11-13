import React, { useState } from 'react';
import styled from 'styled-components';

import { AirportType, ChangeEvent } from '../../types';
import { withLayout } from '../../shared';
import { color } from '../../constants';
import { PageContainer, useModal } from '../../components/common';

import { ReservationHeader, ServiceUsePeriod, PriceModal } from '../../components/Reservation';


import { useServiceDate } from './useServiceDate';

const GimpoAirport: AirportType = "Gimpo";

export const Reservation = withLayout(() => {
  const { serviceDate, changeServiceDate } = useServiceDate();
  const { isModalOpened, openModal, closeModal } = useModal();

  return (
    <>
      <PageContainer>
        <ReservationHeader airportType={GimpoAirport}/>
        <ServiceUsePeriod
          dateFromYmdhm={serviceDate.dateFrom}
          dateToYmdhm={serviceDate.dateTo}
          onChangeDate={changeServiceDate}
          onClickCalculationButton={openModal}
        />
      </PageContainer>
      {isModalOpened && (
        <PriceModal onClose={closeModal} dateFrom={serviceDate.dateFrom} dateTo={serviceDate.dateTo} />
      )}
    </>
  );
});

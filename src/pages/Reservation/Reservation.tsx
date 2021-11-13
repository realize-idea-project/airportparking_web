import React, { useState } from 'react';
import styled from 'styled-components';

import { AirportType } from '../../types';
import { withLayout } from '../../shared';
import { color } from '../../constants';
import { PageContainer } from '../../components/common';

import { ReservationHeader, ServiceUsePeriod, PriceModal } from '../../components/Reservation';

import { usePriceModal } from './usePriceModal';
import { useServiceDate } from './useServiceDate';

const GimpoAirport: AirportType = "Gimpo";

export const Reservation = withLayout(() => {
  const { serviceDays, serviceDate, changeServiceDate } = useServiceDate();
  const { isModalOpened, openModal, closeModal } = usePriceModal(serviceDays);

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
        <PriceModal
          onClose={closeModal}
          dateFrom={serviceDate.dateFrom}
          dateTo={serviceDate.dateTo}
          serviceDays={serviceDays}
        />
      )}
    </>
  );
});

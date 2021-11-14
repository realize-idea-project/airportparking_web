import React, { useState } from 'react';
import styled from 'styled-components';

import { loadHolidayDates } from '../../api';
import { AirportType } from '../../types';
import { withLayout } from '../../shared';
import { color } from '../../constants';
import { PageContainer } from '../../components/common';

import { ReservationHeader, ServiceUsePeriod, PriceModal } from '../../components/Reservation';

import { usePriceModal } from './usePriceModal';
import { useServiceDate } from './useServiceDate';

const GimpoAirport: AirportType = "Gimpo";

export const Reservation = withLayout(() => {
  const { serviceDays, serviceDate, changeServiceDate, servicePrice, isDateSelected } = useServiceDate();
  const { isModalOpened, openModal, closeModal } = usePriceModal(isDateSelected);


  return (
    <>
      <PageContainer>
        <ReservationHeader airportType={GimpoAirport}/>
        <ServiceUsePeriod serviceDate={serviceDate} onChangeDate={changeServiceDate} onClickCalculationButton={openModal} />
      </PageContainer>
      {isModalOpened && (
        <PriceModal onClose={closeModal}
          serviceDate={serviceDate}
          serviceDays={serviceDays}
          servicePrice={servicePrice}
        />
      )}
    </>
  );
});

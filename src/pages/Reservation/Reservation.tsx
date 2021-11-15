import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { loadHolidayDates } from '../../api';
import { AirportType } from '../../types';
import { withLayout } from '../../shared';
import { PageContainer } from '../../components/common';

import { ReservationHeader, ServiceUsePeriod, PriceModal } from '../../components/Reservation';

import { usePriceModal } from './usePriceModal';
import { useServiceDate } from './useServiceDate';

const GimpoAirport: AirportType = "Gimpo";

export const Reservation = withLayout(() => {
  const { serviceDays, serviceDate, changeServiceDate, servicePrice, isDateSelected } = useServiceDate();
  const { isModalOpened, openModal, closeModal } = usePriceModal(isDateSelected);


  useEffect(() => {
    // useServiceDate  move to useServiceDate hook
    const test = async () => {
      console.log('excute')
      const res = await loadHolidayDates(2021, '공휴일');
      console.log(res,'res')
    }

    test()
  }, [])
  
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

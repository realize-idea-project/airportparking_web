import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { AirportType } from '../../types';
import { withLayout } from '../../shared';
import { PageContainer } from '../../components/common';

import { ReservationHeader, ServiceUsePeriod, PriceModal, CustomerInfo } from '../../components/Reservation';

import { usePriceModal } from './usePriceModal';
import { useServiceDate } from './useServiceDate';
import { useCustomerInfo } from './useCustomerInfo';


const GimpoAirport: AirportType = "Gimpo";

export const Reservation = withLayout(() => {
  const { serviceDays, serviceDate, changeServiceDate, servicePrice, isDateSelected } = useServiceDate();
  const { isModalOpened, openModal, closeModal } = usePriceModal(isDateSelected);
  const { customerInfo, changeCustomerInfo } = useCustomerInfo();
  
  return (
    <>
      <PageContainer>
        <ReservationHeader airportType={GimpoAirport}/>
        <ServiceUsePeriod serviceDate={serviceDate} onChangeDate={changeServiceDate} onClickCalculationButton={openModal} />
        <CustomerInfo customerInfo={customerInfo} changeCustomerInfo={changeCustomerInfo}/>
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

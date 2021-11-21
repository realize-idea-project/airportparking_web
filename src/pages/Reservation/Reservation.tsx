import React, { MouseEvent } from 'react';
import styled from 'styled-components';

import { color } from '../../constants';
import { AirportType } from '../../types';
import { withLayout } from '../../shared';
import { PageContainer, Blank } from '../../components/common';

import { ReservationHeader, ServiceUsePeriod, PriceModal, CustomerInfo } from '../../components/Reservation';

import { usePriceModal } from './usePriceModal';
import { useServiceDate } from './useServiceDate';
import { useCustomerInfo } from './useCustomerInfo';


const GimpoAirport: AirportType = "Gimpo";

export const Reservation = withLayout(() => {
  const { serviceDays, serviceDate, changeServiceDate, servicePrice, isDateSelected } = useServiceDate();
  const { isModalOpened, openModal, closeModal } = usePriceModal(isDateSelected);
  const { customerInfo, changeCustomerInfo } = useCustomerInfo();

  const submitForm = async (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    console.log('hi', customerInfo, serviceDate);
  };

  return (
    <>
      <PageContainer>
        <ReservationHeader airportType={GimpoAirport}/>
        <ServiceUsePeriod serviceDate={serviceDate} onChangeDate={changeServiceDate} onClickCalculationButton={openModal} />
        <CustomerInfo customerInfo={customerInfo} changeCustomerInfo={changeCustomerInfo}/>
        <ButtonContainer>
          <SubmitButton onClick={submitForm}>예약하기</SubmitButton>
        </ButtonContainer>
        <Blank height={5} />
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SubmitButton = styled.div`
  font-size: 3vw;
  background-color: ${color.gray_800};
  color: ${color.white};
  padding: 1vw 2vw;
  border-radius: 2vw;
  width: 30vw;
  height: 5vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;
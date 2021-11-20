import React, { FC } from 'react';
import styled from 'styled-components';
import { ChangeEvent } from '../../../types';
import { ServiceDate } from '../../../business';
import { color } from '../../../constants';
import { reservationProperties } from '../../../pages/Reservation/constants';
import { Blank } from '../../common';

import { ServiceUsePeriodInput } from './ServiceUsePeriodInput';

const inputTitles = {
  departure: '차량 접수 예정 시간',
  arrival: '김포공항 도착 예정 시간',
};

interface Props {
  serviceDate: ServiceDate;
  onChangeDate: (event: ChangeEvent<HTMLSelectElement>) => void;
  onClickCalculationButton: () => void;
}

const { dateFrom, dateTo } = reservationProperties;

export const ServiceUsePeriod: FC<Props> = ({ serviceDate, onChangeDate, onClickCalculationButton }) => {
  return (
    <Container>
      <Blank height={5} />
      <>
        <ServiceUsePeriodInput
          title={inputTitles.departure}
          ymdhm={serviceDate.dateFrom}
          onChangeDate={onChangeDate}
          propertyName={dateFrom}
        />
        <Blank height={5} />
        <ServiceUsePeriodInput
          title={inputTitles.arrival}
          ymdhm={serviceDate.dateTo}
          onChangeDate={onChangeDate}
          propertyName={dateTo}
        />
      </>
      <Blank height={8} />
      <CalculateButtonContainer>
        <CalculateButton onClick={onClickCalculationButton} >실시간 요금 계산</CalculateButton>
      </CalculateButtonContainer>
      <Blank height={5} />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 6vw;
  background-color: ${color.gray_100};
`;

const NotiText = styled.div`
  color: red;
  font-size: 4vw;
`;

const CalculateButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalculateButton = styled.div`
  color: white;
  background-color: black;
  text-align: center;
  width: 40vw;
  padding: 3vw 0;
  font-size: 3vw;
  border-radius: 1vw;
`;

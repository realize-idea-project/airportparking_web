/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import styled from 'styled-components';
import { Blank } from '../../../common';


interface ServicePeriodProps {
  title?: string;
  date?: string;
  serviceDays?: number;
}

const ServicePeriod: FC<ServicePeriodProps> = ({ title, date, serviceDays }) => {
  const label = serviceDays ? '이용기간' : title;
  const content = serviceDays ? `${serviceDays}일` : date;

  return (
    <FieldContainer>
      <Label>{label}</Label>
      <Blank width={3} />
      <Contents>{content}</Contents>
    </FieldContainer>
  );
};

interface ServicePeriodAndPriceProps {
  dateFrom : string;
  dateTo: string;
  serviceDays: number;
}

export const ServicePeriodAndPrice: FC<ServicePeriodAndPriceProps> = ({ dateFrom, dateTo, serviceDays }) => {
  return (
    <ServiceUsePeriodContainer>
      <ServicePeriod title='차량 입고일' date={dateFrom} />
      <Blank height={1} />
      <ServicePeriod title='차량 출고일' date={dateTo} />
      <Blank height={1} />
      <ServicePeriod serviceDays={serviceDays} />
    </ServiceUsePeriodContainer>
  );
};


const ServiceUsePeriodContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  
`;

const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 20vw;
  font-size: 2.5vw;
  padding: 0 1vw;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  height: 100%;
  font-size: 2.5vw;
`;
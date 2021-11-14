/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import styled from 'styled-components';
import { ServiceDate } from '../../../../business';
import { thousandSpread } from '../../../../utils';
import { Blank } from '../../../common';


interface ServicePeriodProps {
  title?: string;
  date?: string;
}

const ServicePeriod: FC<ServicePeriodProps> = ({ title, date }) => {

  return (
    <FieldContainer>
      <Label>{title}</Label>
      <Blank width={3} />
      <Contents>{date}</Contents>
    </FieldContainer>
  );
};

interface ServiceDaysAndPriceProps {
  title: string;
  serviceDays?: number;
  servicePrice?: number;
}

const ServiceDaysAndPrice: FC<ServiceDaysAndPriceProps> = ({ title, servicePrice, serviceDays }) => {
  const unit = servicePrice ? '원' : '일';
  const content = servicePrice ? thousandSpread(servicePrice) : serviceDays;
  const color = servicePrice ? 'black' : 'red';
  const fontSize = servicePrice ? '3vw' : '';

  return (
    <FieldContainer>
      <Label>{title}</Label>
      <Blank width={3} />
      <Contents style={{ fontSize }}>
        <HighlightSpan color={color}>{content}</HighlightSpan>
        {unit}
        </Contents>
    </FieldContainer>
  );
};


const PriceNotification = () => {
  return (
    <PriceNotificationContainer>
      <NotiText>• 발렛비 10,000원 추가된 비용입니다.</NotiText>
      <Blank height={0.5} />
      <NotiText>• 100% 실내주차장입니다.</NotiText>
      <Blank height={0.5} />
      <NotiText>• 신용카드 결제시 VAT(부가세)별도 처리됩니다.</NotiText>
      <Blank height={0.5} />
    </PriceNotificationContainer>
  );
};

interface ServicePeriodAndPriceProps {
  serviceDate: ServiceDate;
  serviceDays: number;
  servicePrice: number;
}

export const ServicePeriodAndPrice: FC<ServicePeriodAndPriceProps> = ({ serviceDate, serviceDays, servicePrice }) => {
  return (
    <ServiceUsePeriodContainer>
      <ServicePeriod title='차량 입고일' date={serviceDate.dateFrom} />
      <Blank height={1} />
      <ServicePeriod title='차량 출고일' date={serviceDate.dateTo} />
      <Blank height={1} />
      <ServiceDaysAndPrice title='이용 기간' serviceDays={serviceDays} />
      <Blank height={3} />
      <ServiceDaysAndPrice title='총 이용 요금' servicePrice={servicePrice} />
      <Blank height={3} />
      <PriceNotification />
      <Blank height={1} />
      <ContactNotiText>주차요금에 대한 자세한 문의사항은 해당 고객센터로 문의를 주시면 감사하겠습니다.</ContactNotiText>
      <Blank height={3} />
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

const HighlightSpan = styled.span`
  color: ${({ color }:any ) => color};
`;

const PriceNotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20vw;
`;

const NotiText = styled.div`
  font-size: 2vw;
`;

const ContactNotiText = styled.div`
  font-size: 2vw;
  align-self: center;
`;
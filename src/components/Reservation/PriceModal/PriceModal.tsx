import React, { FC } from 'react';
import styled from 'styled-components';

import { ModalContainer, Blank } from '../../common';
import { color } from '../../../constants';

interface Props {
  onClose: () => void;
  dateFrom: string;
  dateTo: string;
}

interface ServicePeriodProps {
  title: string;
  date: string;
}

const ServicePeriod: FC<ServicePeriodProps> = ({ title, date }) => {
  return (
    <FieldContainer>
    <Label>{`${title}`}</Label>
    <Blank width={3} />
    <Contents>{date}</Contents>
  </FieldContainer>
  );
};

const TotalPeriod = ({ servicePeriod }: any) => {
  return (
    <FieldContainer>
    <Label>이용기간</Label>
    <Blank width={3} />
    <Contents>{`${servicePeriod}일`}</Contents>
  </FieldContainer>
  );
};

export const PriceModal: FC<Props> = ({ onClose, dateFrom, dateTo }) => {
  

  return (
    <ModalContainer onClickCloseButton={onClose} onClickOverlay={onClose}>
      <ContentContainer>
        <Title>예상 결제금액</Title>
        <Blank height={2} />
        <Separator />
        <Blank height={2} />
        <ServiceUsePeriodContainer>
          <ServicePeriod title='차량 입고일' date={dateFrom} />
          <Blank height={1} />
          <ServicePeriod title='차량 출고일' date={dateTo} />
          <Blank height={1} />
          <TotalPeriod servicePeriod={1} />
        </ServiceUsePeriodContainer>
      </ContentContainer>
    </ModalContainer>
  );
};

const ContentContainer = styled.div`
  /* background-color: red; */
`;

const Separator = styled.div`
  width: 100%;
  height: 0.1vw;
  background-color: ${color.gray_400};
`;

const Title = styled.div`
  font-size: 4vw;
`;

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
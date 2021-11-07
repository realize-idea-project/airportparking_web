import React from 'react';
import styled from 'styled-components';
import { color } from '../../../constants/style';
import { Blank } from '../../common';

import { ServiceUsePeriodInput } from './ServiceUsePeriodInput';


const inputTitles = {
  departure: '차량 접수 예정 시간',
  arrival: '김포공항 도착 예정 시간',
};

export const ServiceUsePeriod = () => {
  return (
    <Container>
      <NotiText>※ 24시간 기준으로 입력해 주세요.</NotiText>
      <Blank height={5} />
      <>
        <ServiceUsePeriodInput title={inputTitles.departure}/>
        <Blank height={5} />
        <ServiceUsePeriodInput title={inputTitles.arrival}/>
      </>
    </Container>
  );
};

const Container = styled.div``;

const NotiText = styled.div`
  color: red;
  font-size: 4vw;
`;


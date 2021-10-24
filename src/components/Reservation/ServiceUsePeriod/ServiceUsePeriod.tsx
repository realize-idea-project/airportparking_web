import React from 'react';
import styled from 'styled-components';
import { color } from '../../../constants/style';
import { Blank } from '../../common';
import { px } from '../../../utils';

import { ServiceUsePeriodInput } from './ServiceUsePeriodInput';
import { Notifications } from './Notifications';


const inputTitles = {
  departure: '차량 접수 예정 시간',
  arrival: '김포공항 도착 예정 시간',
};

export const ServiceUsePeriod = () => {
  return (
    <Container>
      <Blank height={10} />
      <NotiText>※ 24시간 기준으로 입력해 주세요.</NotiText>
      <Blank height={20} />
      <ServiceUsePeriodInput title={inputTitles.departure}/>
      <Blank height={20} />
      <ServiceUsePeriodInput title={inputTitles.arrival}/>
      <Blank height={20} />
      <Notifications />
      <Blank height={20} />
      <CalcuateButton>실시간 요금 계산</CalcuateButton>
      <Blank height={10} />
    </Container>
  )
};

const Container = styled.div`
  padding: 0 ${px(20)};
  background-color: ${color.gray_100};
`;

const NotiText = styled.div`
  color: red;
  font-size: ${px(13)};
`;

const CalcuateButton = styled.div`
  color: white;
  background-color: black;
  padding: ${px(10)} 0;
  font-size: ${px(14)};
  text-align: center;
`;
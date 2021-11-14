import React, { FC } from 'react';
import styled from 'styled-components';
import { Blank } from '../../../common';

export const Notifications: FC = () => {
 return (
   <Container>
      <NotiText>※ 요일제 요금제를 적용합니다.</NotiText>
      <Blank height={2} />
      <NotiText>※ 월 - 목: 10,000원 / 금, 토, 일, 공휴일: 15,000원</NotiText>
      <Blank height={2} />
      <NotiText>※ 대행료 10,000원 포함 금액이니 참고하시기 바랍니다.</NotiText>
      <Blank height={2} />
      <NotiText>※ 기본요금은 30,000원 이며 30,000원 이상의 금액만 요일별 요금이 적용되어 집니다.</NotiText>
      <Blank height={2} />
      <NotiText>※ 일정이 변경이 되거나 비행기출발 지연시 당사로 꼭 연락 바랍니다.</NotiText>
      <Blank height={2} />
      <NotiText>※ 사전 연락없이 출차 지연시 대기료가 추가될 수 있습니다. (30분 5천원 1시간 1만원)</NotiText>
   </Container>
 )
};



const Container = styled.div``;

const NotiText = styled.div`
  
  font-size: 2vw;
`;

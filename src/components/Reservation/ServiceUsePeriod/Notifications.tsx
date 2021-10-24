import React, { FC } from 'react';
import styled from 'styled-components';
import { Blank } from '../../common';
import { px } from '../../../utils';

export const Notifications = () => {
 return (
   <Container>
      <NotiText>※ 대행료 10,000원 포함 금액이니 참고하시기 바랍니다.</NotiText>
      <Blank height={10} />
      <NotiText>※ 출발이나 도착시간은 김포공항 도착시간으로 정확히 기록해 주세요.</NotiText>
      <Blank height={10} />
      <NotiText>※ 일정이 변경이 되거나 비행기출발 지연시 당사로 꼭 연락 바랍니다.</NotiText>
      <Blank height={10} />
      <NotiText>※ 사전 연락없이 출차 지연시 대기료가 추가될 수 있습니다. (30분 5천원 1시간 1만원)</NotiText>
   </Container>
 )
};

const Container = styled.div``;

const NotiText = styled.div`
  color: red;
  font-size: ${px(13)};
`;

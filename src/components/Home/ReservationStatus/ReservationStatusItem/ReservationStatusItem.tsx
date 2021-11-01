import React, { FC } from 'react';
import styled from 'styled-components';
import { color } from '../../../../constants'


import { DateSection } from './DateSection';
import { StatusSection } from './StatusSection';
import { CalendarSection } from './CalendarSection';

const flexProportion = {
  dateSection: 2,
  statusSection: 9,
  calendarSection: 4,
};

export const ReservationStatusItem = () => {
  return (
    <ItemContainer >
      <DateSection
        flexProportion={flexProportion.dateSection}
        month='10'
        date='11'
      />
      <StatusSection
        flexProportion={flexProportion.statusSection}
        text='김**님의 45** 예약약완료입니다.'
        status='reserved'
      />
      <CalendarSection
        flexProportion={flexProportion.calendarSection}
        calendarDate='2021-11-11'
      />
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border: 2px solid ${color.gray_150};
  padding: 1vw;
`;




import React, { FC } from 'react';
import styled from 'styled-components';
import { color , RouterPath } from '../../../../constants'
import { RouterPathType } from '../../../../types';

import { ReservationStatus } from '../types';
import { DateSection } from './DateSection';
import { StatusSection } from './StatusSection';
import { CalendarSection } from './CalendarSection';

const flexProportion = {
  dateSection: 2,
  statusSection: 9,
  calendarSection: 4,
};

interface StatusText {
  text: string;
  color: string;
}

const statusTextBy: Record<ReservationStatus, StatusText> = {
  reserved: { text: '예약완료', color: 'green' },
  finished: { text: '출차완료', color: 'red' },
  applied: {text: '예약신청', color: 'black' },
};

interface Props {
  reservationTimestamp: string;
  guestName: string;
  plateNumber: number;
  reservationStatus: ReservationStatus;
  dateTo: string;
  dateFrom: string;
  onClickItem: () => void;
}

export const ReservationStatusItem: FC<Props> = ({
  reservationTimestamp,
  guestName,
  plateNumber,
  reservationStatus,
  dateTo,
  dateFrom,
  onClickItem,
}) => {
  const [_, month, date] = reservationTimestamp.split('-');

  const securedName = `${guestName[0]}**`
  const securedPlateNumber = `${plateNumber.toString().slice(0,2)}**`;
  const reservationText = statusTextBy[reservationStatus].text;


  return (
    <ItemContainer onClick={onClickItem}>
      <DateSection
        flexProportion={flexProportion.dateSection}
        month={month}
        date={date}
      />
      <StatusSection
        flexProportion={flexProportion.statusSection}
        name={securedName}
        plateNumber={securedPlateNumber}
        statusText={reservationText}
        textColor={statusTextBy[reservationStatus].color}
      />
      <CalendarSection
        flexProportion={flexProportion.calendarSection}
        calendarDate={dateTo}
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






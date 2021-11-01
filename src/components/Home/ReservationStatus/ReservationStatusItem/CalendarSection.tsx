import React, { FC } from 'react';
import styled from 'styled-components';
import { images } from '../../../../constants'
import { Blank } from '../../../common';

interface Props {
  calendarDate: string;
  flexProportion: number;
}

export const CalendarSection: FC<Props> = ({ flexProportion, calendarDate }) => {
  return (
    <CalendarContainer flex={flexProportion}>
      <CalendarDateContainer>
        <CalendarIcon src={images.calendarIcon} />
        <Blank width={1.5} />
        <Date>{calendarDate}</Date>
      </CalendarDateContainer>
    </CalendarContainer>
  );
};

const CalendarContainer: any = styled.div`
  flex: ${({ flex }: any) => flex};

  display: flex;
  justify-content: center;
  align-items: center;
`;


const CalendarDateContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

const CalendarIcon = styled.img`
  width: 4vw;
  height: 4vw;
`;

const Date = styled.div`
  font-size: 3vw;
  padding-top: 0.6vw;
`;
import React, { FC } from 'react';
import styled from 'styled-components';
import { Blank } from '../../../common';
import { images } from '../../../../constants';

interface Props {
  date: string;
}

export const CalendarAndDate: FC<Props> = ({ date }) => {
  return (
    <DateContainer>
      <CalendarIcon src={images.calendarIcon} />
      <Blank width={3} />
      <Date>{date}</Date>
    </DateContainer>
  );
};

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

const Date = styled.div`
  font-size: 5vw;
  padding-top: 1vw;
`;

const CalendarIcon = styled.img`
  width: 6vw;
  height: 6vw;
`;
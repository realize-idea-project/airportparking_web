import React, { FC } from 'react';
import styled from 'styled-components';
import { color } from '../../../../constants'

interface Props {
  month: string;
  date: string;
  flexProportion: number;
}

export const DateSection: FC<Props> = ({ flexProportion, month, date }) => {
  return (
    <DateContainer flex={flexProportion}>
      <MonthText>{month}</MonthText>
      <DateText>{date}</DateText>
    </DateContainer>
  );
};

const DateContainer: any = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }: any) => flex};
  
  justify-content: center;
  align-items: center;
  border-right: 0.5vw solid ${color.gray_150};
`;

const MonthText = styled.div`
  font-size: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.2vw;
`;

const DateText = styled.div`
  width: 6vw;
  font-size: 4vw;
  background-color: ${color.red};
  color: white;
  padding-top: 0.2vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;
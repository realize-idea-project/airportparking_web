import React, { FC } from 'react';
import styled from 'styled-components';
import { Blank } from '../../common';
import { px } from '../../../utils';

import { serviceUsePeriodOptions, currentYear, currentMonth, currentDate } from './selectOptions';

interface Props {
  title: string
}

export const ServiceUsePeriodInput: FC<Props> = ({ title }) => {
  return (
    <FieldContainer>
    <FieldLabel>{title}</FieldLabel>
    <Blank height={10} />
    <SelectorContainer>
      <select defaultValue={`${currentYear}년`}>
        {
          serviceUsePeriodOptions.year.map((year) => (
            <option value={year}>
              {year}
            </option>
          ))
        }
      </select>
      <Blank width={10} />
      <select defaultValue={`${currentMonth + 1}월`}>
        {
          serviceUsePeriodOptions.month.map((month) => (
            <option value={month}>
              {month}
            </option>
          ))
        }
      </select>
      <Blank width={10} />
      <select defaultValue={`${currentDate}일`}>
        {
          serviceUsePeriodOptions.date.map((date) => (
            <option value={date}>
              {date}
            </option>
          ))
        }
      </select>
      <Blank width={10} />
      <select defaultValue='12시'>
        {
          serviceUsePeriodOptions.hour.map((hour) => (
            <option value={hour}>
              {hour}
            </option>
          ))
        }
      </select>
      <Blank width={10} />
      <select defaultValue='00분'>
        {
          serviceUsePeriodOptions.minute.map((minute) => (
            <option value={minute}>
              {minute}
            </option>
          ))
        }
      </select>
    </SelectorContainer>
  </FieldContainer>
  )
};

const FieldContainer = styled.div``;

const FieldLabel = styled.div`
  font-size: ${px(14)};
`;

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
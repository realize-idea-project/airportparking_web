import React, { FC } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { dateFormat , ServiceDateKey } from '../../../business';
import { ChangeEvent } from '../../../types';
import { getModifiedEvent } from '../../../utils';
import { Blank } from '../../common';

import { ymdhmList, getYmdhm } from './helpers';

interface Props {
  title: string;
  ymdhm: string;
  propertyName: ServiceDateKey;
  onChangeDate: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const ServiceUsePeriodInput: FC<Props> = ({ title, ymdhm, propertyName, onChangeDate }) => {
  const { selectedYear, selectedMonth, selectedDate, selectedHour, selectedMinute } = getYmdhm(ymdhm)

  const changeYmdhs = (unitType: dayjs.UnitType) => (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = unitType === 'month'
      ? Number(event.target.value) - 1
      : Number(event.target.value);

    const newYmdhm = dayjs(ymdhm)
      .set(unitType,selectedValue)
      .format(dateFormat);

    onChangeDate(getModifiedEvent(event, propertyName, newYmdhm));
  };

  return (
    <FieldContainer>
      <FieldLabel>{title}</FieldLabel>
      <Blank height={2} />
      <SelectorContainer>
        <StyledSelect value={selectedYear} onChange={changeYmdhs('year')} >
          {
            ymdhmList.year.map((year) => (
              <option key={year} value={year}>
                {`${year}년`}
              </option>
            ))
          }
        </StyledSelect>
       <Blank width={1} />
        <StyledSelect value={selectedMonth} onChange={changeYmdhs('month')} >
          {
            ymdhmList.month.map((month) => (
              <option key={month} value={month}>
                {`${month}월`}
              </option>
            ))
          }
        </StyledSelect>
        <Blank width={1} />
        <StyledSelect value={selectedDate} onChange={changeYmdhs('date')}>
          {
            ymdhmList.date.map((date) => (
              <option key={date} value={date}>
                  {`${date}일`}
              </option>
            ))
          }
        </StyledSelect>
        <Blank width={1} />
        <StyledSelect value={selectedHour} onChange={changeYmdhs('hour')}>
          {
            ymdhmList.hour.map((hour) => (
              <option key={hour} value={hour}>
                {`${hour}시`}
              </option>
            ))
          }
        </StyledSelect>
        <Blank width={1} />
        <StyledSelect value={selectedMinute} onChange={changeYmdhs('minute')}>
          {
            ymdhmList.minute.map((minute) => (
              <option key={minute} value={minute}>
                {`${minute}분`}
              </option>
            ))
          }
        </StyledSelect>
      </SelectorContainer>
    </FieldContainer>
  );
};

const FieldContainer = styled.div``;

const FieldLabel = styled.div`
  font-size: 4.5vw;
`;

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const StyledSelect = styled.select`
  width: 20vw;
  height: 6.5vw;
  max-height: 56px;
  border-radius: 3px;

  font-size: 3vw;
`;


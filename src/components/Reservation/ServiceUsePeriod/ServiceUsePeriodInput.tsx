import React, { FC } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { dateFormat } from '../../../constants';
import { ChangeEvent } from '../../../types';
import { getModifiedEvent } from '../../../utils';
import { Blank } from '../../common';

import { FromToDateKey } from '../../../pages/Reservation/types';
import { ymdhmList, getYmdhm } from './helpers';

interface Props {
  title: string;
  ymdhm: string;
  propertyName: FromToDateKey;
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
        <select value={selectedYear} onChange={changeYmdhs('year')} >
          {
            ymdhmList.year.map((year) => (
              <option key={year} value={year}>
                {`${year}년`}
              </option>
            ))
          }
        </select>
       <Blank width={1} />
        <select value={selectedMonth} onChange={changeYmdhs('month')} >
          {
            ymdhmList.month.map((month) => (
              <option key={month} value={month}>
                {`${month}월`}
              </option>
            ))
          }
        </select>
        <Blank width={1} />
        <select value={selectedDate} onChange={changeYmdhs('date')}>
          {
            ymdhmList.date.map((date) => (
              <option key={date} value={date}>
                  {`${date}일`}
              </option>
            ))
          }
        </select>
        <Blank width={1} />
        <select value={selectedHour} onChange={changeYmdhs('hour')}>
          {
            ymdhmList.hour.map((hour) => (
              <option key={hour} value={hour}>
                {`${hour}시`}
              </option>
            ))
          }
        </select>
        <Blank width={1} />
        <select value={selectedMinute} onChange={changeYmdhs('minute')}>
          {
            ymdhmList.minute.map((minute) => (
              <option key={minute} value={minute}>
                {`${minute}분`}
              </option>
            ))
          }
        </select>
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
import dayjs from "dayjs";
import _ from 'lodash';
import { dateFormat } from './constants';
import { ServiceDate } from './types';
import { openHour } from '../company';

const initialMinute = 0;
const ceilingCoefficient = 10;

export const getInitailServieDate = (): ServiceDate => {
  const currentDate = dayjs(new Date());
  const isWorkingHour = currentDate.hour() >= openHour;

  const clampedHour = isWorkingHour ? currentDate.hour() : openHour;
  const ceiledMinutes = isWorkingHour
    ? Math.ceil(currentDate.minute() / ceilingCoefficient) * ceilingCoefficient
    : initialMinute;

  const initDate = currentDate
    .set('hour', clampedHour)
    .set('minute', ceiledMinutes)
    .format(dateFormat);

  return {
    dateFrom: initDate,
    dateTo: initDate,
  };
};

export const getHowManyDaysUseService = (dateFrom: string, dateTo: string) => {
  
  const from  = dayjs(dateFrom.split(' ')[0]);
  const to = dayjs(dateTo.split(' ')[0]);

  const howManyDays = to.diff(from, 'day');

  // if (howManyDays < 0 || _.isNaN(howManyDays)) {
  //   alert('날짜를 잘못 입력하셨습니다.');
    
  // }
  return howManyDays;
};
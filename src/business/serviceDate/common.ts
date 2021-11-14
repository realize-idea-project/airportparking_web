import dayjs from "dayjs";
import _ from 'lodash';
import { dateFormat, priceSystem, officialHoliday, ymdDateFormat, sunday, saturday, friday } from './constants';
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

  const howManyDays = to.diff(from, 'day') + 1;

  return howManyDays;
};


const isHoliday = (date: string) => officialHoliday.includes(date);
const isWeekend = (date: string) => dayjs(date).day() === sunday || dayjs(date).day() === saturday || dayjs(date).day() === friday;

export const getServicePrice = (dateFrom: string, dateTo: string) => {
  const { weekdayPrice, holidayPrice, minimumPrice, valetFee } = priceSystem;
  const serviceDays = getHowManyDaysUseService(dateFrom, dateTo);
  const serviceUseDates = _.range(serviceDays).map((day) => dayjs(dateFrom).add(day, 'day').format(ymdDateFormat));

  const holiday = serviceUseDates.filter((date) => isHoliday(date)).length;
  const weekend = serviceUseDates.filter((date) => !isHoliday(date) && isWeekend(date)).length;
  const weekday = serviceUseDates.filter((date) => !isHoliday(date) && !isWeekend(date)).length;

  const calculatedPrice = weekday * weekdayPrice + weekend * holidayPrice + holiday * holidayPrice;
  const selectedPrice = calculatedPrice < minimumPrice ? minimumPrice : calculatedPrice;

  const servicePrice = selectedPrice + valetFee;

  return servicePrice;
};
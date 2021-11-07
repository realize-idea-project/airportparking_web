import dayjs from "dayjs";
import { dateFormat } from '../../constants';
import { FromToDate } from './types';

export const getInitailFromToDate = (): FromToDate => {
  const currentDate = dayjs(new Date());
  const ceiledMinutes = Math.ceil(dayjs(new Date()).minute() / 10) * 10;
  const initDate = currentDate.set('minute', ceiledMinutes).format(dateFormat);

  return {
    dateFrom: initDate,
    dateTo: initDate,
  };
};
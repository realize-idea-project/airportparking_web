import dayjs from 'dayjs';
import { ServiceDate } from './types';
import { reservationProperties } from '../../pages/Reservation/constants';
// import { selectDateErrorCase } from './constants';


const { dateFrom, dateTo } = reservationProperties;

const checkValidity = (serviceDate: ServiceDate, name: string, value: string) => {
  const chooseEarlierDateThanDateFrom = {
    condition: name === dateTo && (dayjs(value).diff(serviceDate.dateFrom) <= 0),
    // errorCase: selectDateErrorCase.chooseEarlierDateThanDateFrom,
  };
  const chooseLaterDateThanDateTo = {
    condition: name === dateFrom && (dayjs(value).diff(serviceDate.dateTo) > 0),
    // errorCase: selectDateErrorCase.chooseLaterDateThanDateTo,
  };
  const chooseEarlierDateThanCurrentDate = {
    condition: dayjs(value).diff(new Date()) < 0,
    // errorCase: selectDateErrorCase.chooseEarlierDateThanCurrentDate,
  };

  

};


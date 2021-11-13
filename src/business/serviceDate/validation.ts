import dayjs from 'dayjs';
import { reservationProperties } from '../../pages/Reservation/constants';
import { ServiceDate, ServiceDateKey } from './types';
import { selectDateErrorCodes, ErrorCode, changeDateAlertMessage } from './constants';


const { dateFrom, dateTo } = reservationProperties;

export const getErrorCode = (serviceDate: ServiceDate, name: ServiceDateKey, value: string) => {
  const errorCases = [
    {
      condition: dayjs(value).diff(new Date()) < 0,
      errorCode: selectDateErrorCodes.chooseEarlierDateThanCurrentDate,
    },
    {
      condition: name === dateTo && (dayjs(value).diff(serviceDate.dateFrom) <= 0),
      errorCode: selectDateErrorCodes.chooseEarlierDateThanDateFrom,
    },
    {
      condition: name === dateFrom && (dayjs(value).diff(serviceDate.dateTo) > 0),
      errorCode: selectDateErrorCodes.chooseLaterDateThanDateTo,
    }
  ];

  const errorCase = errorCases.find(({ condition }) =>  condition);
  return errorCase?.errorCode;
};

export const getErrorMessage = (errorCode: ErrorCode) => {

  const alertMessages = {
    [selectDateErrorCodes.chooseEarlierDateThanCurrentDate]: changeDateAlertMessage.chooseEarlierDateThanCurrentDate,
    [selectDateErrorCodes.chooseEarlierDateThanDateFrom]: changeDateAlertMessage.chooseEarlierDateThanDateFrom,
    [selectDateErrorCodes.chooseLaterDateThanDateTo]: changeDateAlertMessage.chooseLaterDateThanDateTo,
  };

  return alertMessages[errorCode];
};

import React, { useState } from 'react';
import { ChangeEvent } from '../../types';
import {
  getInitailServieDate,
  getHowManyDaysUseService,
  ServiceDate,
  ServiceDateKey,
  getErrorCode,
  getErrorMessage,
  getServicePrice,
} from '../../business';

export const useServiceDate = () => {
  const [serviceDate, setServiceDate] = useState<ServiceDate>(getInitailServieDate());

  const changeServiceDate = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    const errorCode = getErrorCode(serviceDate, name as ServiceDateKey, value);

    if (errorCode) {
      alert(getErrorMessage(errorCode));
      return;
    }

    setServiceDate((prev) => ({ ...prev, [name]: value }));
  };

  const isDateSelected = (dateFrom: string, dateTo: string) => dateFrom !== dateTo;


  return {
    changeServiceDate,
    serviceDate,
    serviceDays: getHowManyDaysUseService(serviceDate.dateFrom, serviceDate.dateTo),
    servicePrice: getServicePrice(serviceDate.dateFrom, serviceDate.dateTo),
    isDateSelected: isDateSelected(serviceDate.dateFrom, serviceDate.dateTo),
  };
};
import React, { useState } from 'react';
import { ChangeEvent } from '../../types';
import {
  getInitailServieDate,
  getHowManyDaysUseService,
  ServiceDate,
  ServiceDateKey,
  getErrorCode,
  getErrorMessage,
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

  return {
    serviceDays: getHowManyDaysUseService(serviceDate.dateFrom, serviceDate.dateTo),
    serviceDate,
    changeServiceDate,
  };
};
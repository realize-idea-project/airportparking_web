import React, { useState } from 'react';
import dayjs from 'dayjs';
import { getInitailServieDate, getHowManyDaysUseService, ServiceDate } from '../../business';
import { ChangeEvent } from '../../types';


console.log(dayjs('2021-11-12').diff(new Date(), 'day'))

export const useServiceDate = () => {
  const [serviceDate, setServiceDate] = useState<ServiceDate>(getInitailServieDate());

  const changeServiceDate = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    

    

    setServiceDate((prev) => ({ ...prev, [name]: value }));
  };

  getHowManyDaysUseService(serviceDate.dateFrom, serviceDate.dateTo)

  return {
    serviceDate,
    changeServiceDate,
  };
};
import React, { useState, useEffect } from 'react';

export type CustomerInfoKeys = 'name'
export type CustomerInfoType = Record<CustomerInfoKeys, any>;


export const useCustomerInfo = () => {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfoType | undefined>();

  const changeCustomerInfo = (key: CustomerInfoKeys, value: string) => {
    setCustomerInfo((prev) => ({ ...prev, [key]: value}));
  };

  return { customerInfo, changeCustomerInfo };
};

import React, { useState, useEffect } from 'react';

export type CustomerInfoKeys =
  'name' |
  'mobile' |
  'carModel' |
  'plateNumber' |
  'comment' |
  'password' |
  'isAgreePrivate' |
  'isAgreeService';

type Mobile = string[];
type PlateNumber = string[];
export interface CustomerInfoType {
  name?: string;
  mobile?: Mobile;
  carModel?: string;
  plateNumber?: PlateNumber;
  comment?: string;
  password?: string;
  isAgreePrivate?: boolean;
  isAgreeService?: boolean;
}


export const useCustomerInfo = () => {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfoType | undefined>();

  const changeCustomerInfo = (key: CustomerInfoKeys, value: string) => {
    setCustomerInfo((prev) => ({ ...prev, [key]: value }));
  };

  return { customerInfo, changeCustomerInfo };
};

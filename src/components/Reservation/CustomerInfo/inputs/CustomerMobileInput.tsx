import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { Blank } from '../../../common';
import { ChangeEvent } from '../../../../types';
import { CustomerInfoKeys } from '../../../../pages/Reservation/useCustomerInfo';

import { CustomerInfoInputField } from './CustomerInfoInputField';

const nameKey = '_';

interface Props {
  customerInfoKey: CustomerInfoKeys;
  onChangeName: (key: CustomerInfoKeys, value: string[]) => void;
  customerMobile: string[] | undefined;
  fieldName: string;
}

export const CustomerMobileInput: FC<Props> = ({ fieldName, customerMobile, customerInfoKey, onChangeName }) => {

  const chnageMobile = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (checkHasCharactor(value)) {
      alert('숫자만 입력해주세요.');
      return;
    }

    const newMobile = getInitialMobile(customerMobile)
    .map((mobile, index) => index === getIndex(name) ? value : mobile);

    onChangeName(customerInfoKey, newMobile);
  };

  return (
    <CustomerInfoInputField fieldName={fieldName}>
      <MobileInputContainer>
        <StyledInput value={customerMobile?.[0] ?? ''} onChange={chnageMobile} name={`${customerInfoKey}${nameKey}0`} />
        <MobileInputDash>-</MobileInputDash>
        <StyledInput value={customerMobile?.[1] ?? ''} onChange={chnageMobile} name={`${customerInfoKey}${nameKey}1`} />
        <MobileInputDash>-</MobileInputDash>
        <StyledInput value={customerMobile?.[2] ?? ''} onChange={chnageMobile} name={`${customerInfoKey}${nameKey}2`} />
      </MobileInputContainer>
    </CustomerInfoInputField>
  );
};

const getIndex = (name: string) => Number(name.split(nameKey)[1]);
const getInitialMobile = (mobile: string[] | undefined) => mobile ?? _.range(0,3).map(() => '');
const checkHasCharactor = (target: string) => /[^0-9]/g.test(target);

const MobileInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const MobileInputDash = styled.div`
  width: 10vw;
  font-size: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5vw;
`;

const StyledInput = styled.input`
  height: 100%;
  width: 100%;
`;
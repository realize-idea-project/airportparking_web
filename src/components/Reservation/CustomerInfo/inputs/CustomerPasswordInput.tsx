import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Blank } from '../../../common';
import { ChangeEvent } from '../../../../types';
import { CustomerInfoKeys } from '../../../../pages/Reservation/useCustomerInfo';

import { CustomerInfoInputField } from './CustomerInfoInputField';

interface Props {
  customerInfoKey: CustomerInfoKeys;
  onChangeName: (key: CustomerInfoKeys, value: string) => void;
  customerPassword: string | undefined;
  fieldName: string;
}

export const CustomerPasswordInput: FC<Props> = ({ fieldName, customerPassword, customerInfoKey, onChangeName }) => {
  
  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChangeName(name as CustomerInfoKeys, value);
  };

  return (
    <CustomerInfoInputField fieldName={fieldName}>
      <StyledInput
        value={customerPassword ?? ''}
        onChange={changeName}
        name={customerInfoKey}
      />
    </CustomerInfoInputField>
  );
};


const StyledInput = styled.input`
  height: 100%;
  width: 100%;
`;
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Blank } from '../../../common';
import { ChangeEvent } from '../../../../types';
import { CustomerInfoKeys } from '../../../../pages/Reservation/useCustomerInfo';

import { CustomerInfoInputField } from './CustomerInfoInputField';

interface Props {
  customerInfoKey: CustomerInfoKeys;
  onChangeName: (key: CustomerInfoKeys, value: string) => void;
  customerCarModel: string | undefined;
  fieldName: string;
}

export const CustomerCarModelInput: FC<Props> = ({ fieldName, customerCarModel, customerInfoKey, onChangeName }) => {

  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChangeName(name as CustomerInfoKeys, value);
  };

  return (
    <CustomerInfoInputField fieldName={fieldName}>
      <StyledInput
        value={customerCarModel ?? ''}
        onChange={changeName}
        name={customerInfoKey}
        placeholder='예) 제네시스 G80'
      />
    </CustomerInfoInputField>
  );
};


const StyledInput = styled.input`
  height: 100%;
  width: 100%;
`;
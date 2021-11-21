import React, { FC, useState } from 'react';
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
  customerPlateNumber: string[] | undefined;
  fieldName: string;
}

export const CustomerPlateNumberInput: FC<Props> = ({ fieldName, customerPlateNumber, customerInfoKey, onChangeName }) => {

  const changePlateNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const newPlateNumber = getInitialPlateNumber(customerPlateNumber)
    .map((plateNumber, index) => index === getIndex(name) ? value : plateNumber);

    onChangeName(customerInfoKey, newPlateNumber);
  };

  return (
    <CustomerInfoInputField fieldName={fieldName}>
      <PlateNumberInputContainer>
        <StyledInput
          value={customerPlateNumber?.[0] ?? ''}
          onChange={changePlateNumber}
          name={`${customerInfoKey}${nameKey}0`}
          placeholder='앞자리 예) 28도'
        />
        <Blank width={10} />
        <StyledInput
          value={customerPlateNumber?.[1] ?? ''}
          onChange={changePlateNumber}
          name={`${customerInfoKey}${nameKey}1`}
          placeholder='뒷자리 예) 3204'
        />
      </PlateNumberInputContainer>
    </CustomerInfoInputField>
  );
};

const getIndex = (name: string) => Number(name.split(nameKey)[1]);
const getInitialPlateNumber = (plateNumber: string[] | undefined) => plateNumber ?? _.range(0,2).map(() => '');

const PlateNumberInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const StyledInput = styled.input`
  height: 100%;
  width: 100%;
`;
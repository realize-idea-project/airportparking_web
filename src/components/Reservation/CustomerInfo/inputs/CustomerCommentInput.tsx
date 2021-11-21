import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Blank } from '../../../common';
import { ChangeEvent } from '../../../../types';
import { CustomerInfoKeys } from '../../../../pages/Reservation/useCustomerInfo';

import { CustomerInfoInputField } from './CustomerInfoInputField';

interface Props {
  customerInfoKey: CustomerInfoKeys;
  onChangeName: (key: CustomerInfoKeys, value: string) => void;
  customerComment: string | undefined;
  fieldName: string;
}

export const CustomerCommentInput: FC<Props> = ({ fieldName, customerComment, customerInfoKey, onChangeName }) => {

  const changeName = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    onChangeName(name as CustomerInfoKeys, value);
  };

  return (
    <CustomerInfoInputField fieldName={fieldName}>
      <StyledTextArea
        value={customerComment ?? ''}
        name={customerInfoKey}
        onChange={changeName}
      />
    </CustomerInfoInputField>
  );
};


const StyledTextArea = styled.textarea`
  height: 20vw;
  width: 100%;
`;
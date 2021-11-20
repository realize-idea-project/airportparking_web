import React, { FC } from 'react';
import styled from 'styled-components';
import { ChangeEvent } from '../../../types';
import { color } from '../../../constants';
import { getModifiedEvent } from '../../../utils';
import { Blank } from '../../common';

import { CustomerInfoType, CustomerInfoKeys } from '../../../pages/Reservation/useCustomerInfo';
import { CustomerNameInput } from './CustomerNameInput';

interface Props {
  customerInfo: CustomerInfoType | undefined;
  changeCustomerInfo: (key: CustomerInfoKeys, value: any) => void;
}

export const CustomerInfo: FC<Props> = ({ customerInfo, changeCustomerInfo }) => {
  return (
    <Container>
      <Blank height={5} />
      <CustomerNameInput
        fieldName='예약자 이름'
        customerInfoKey='name'
        customerName={customerInfo?.name}
        onChangeName={changeCustomerInfo}
      />
      <Blank height={5} />
      
    </Container>
  );
};

const Container = styled.div`
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  padding: 0 6vw;
`;

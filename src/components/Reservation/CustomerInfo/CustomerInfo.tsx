import React, { FC } from 'react';
import styled from 'styled-components';
import { color } from '../../../constants';
import { Blank } from '../../common';

import { CustomerInfoType, CustomerInfoKeys } from '../../../pages/Reservation/useCustomerInfo';

import { PrivateInfoAgreement, ServiceAgreement } from './agreements';

import {
  CustomerNameInput,
  CustomerMobileInput,
  CustomerCarModelInput,
  CustomerPlateNumberInput,
  CustomerCommentInput,
  CustomerPasswordInput,
} from './inputs';

interface Props {
  customerInfo: CustomerInfoType | undefined;
  changeCustomerInfo: (key: CustomerInfoKeys, value: any) => void;
}

export const CustomerInfo: FC<Props> = ({ customerInfo, changeCustomerInfo }) => {
  return (
    <Container>
      <Blank height={5} />
      <CustomerNameInput
        onChangeName={changeCustomerInfo}
        fieldName='예약자 이름'
        customerInfoKey='name'
        customerName={customerInfo?.name}
      />
      <Blank height={3} />
      <CustomerMobileInput
        onChangeName={changeCustomerInfo}
        fieldName='핸드폰 번호'
        customerInfoKey='mobile'
        customerMobile={customerInfo?.mobile}
      />
      <Blank height={3} />
      <CustomerCarModelInput
        onChangeName={changeCustomerInfo}
        fieldName='차량종류'
        customerInfoKey='carModel'
        customerCarModel={customerInfo?.carModel}
      />
      <Blank height={3} />
      <CustomerPlateNumberInput
        onChangeName={changeCustomerInfo}
        fieldName='차량번호'
        customerInfoKey='plateNumber'
        customerPlateNumber={customerInfo?.plateNumber}
      />
      <Blank height={3} />
      <CustomerCommentInput
        onChangeName={changeCustomerInfo}
        fieldName='특이사항'
        customerInfoKey='comment'
        customerComment={customerInfo?.comment}
      />
      <Blank height={3} />
      <CustomerPasswordInput
        onChangeName={changeCustomerInfo}
        fieldName='비밀번호'
        customerInfoKey='password'
        customerPassword={customerInfo?.password}
      />
      <Blank height={10} />
      <PrivateInfoAgreement
        onChangeName={changeCustomerInfo}
        customerInfoKey='isAgreePrivate'
        customerIsAgreePrivate={customerInfo?.isAgreePrivate}
      />
      <Blank height={5} />
      <ServiceAgreement
        onChangeName={changeCustomerInfo}
        customerInfoKey='isAgreeService'
        customerIsAgreeService={customerInfo?.isAgreeService}
      />
      <Blank height={10} />
    </Container>
  );
};

const Container = styled.div`
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  padding: 0 6vw;
`;

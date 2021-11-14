import React, { FC } from 'react';
import styled from 'styled-components';

import { ModalContainer, Blank } from '../../common';
import { ServiceDate } from '../../../business';
import { color } from '../../../constants';
import { ServicePeriodAndPrice } from './PriceModalViewItems';
import { Notifications } from './PriceModalViewItems/Notifications';

interface Props {
  onClose: () => void;
  serviceDate: ServiceDate
  serviceDays: number;
  servicePrice: number;
}

export const PriceModal: FC<Props> = ({ onClose, serviceDate, serviceDays, servicePrice }) => {

  return (
    <ModalContainer onClickCloseButton={onClose}>
      <PriceModalViewContainer>
        <Title>예상 결제금액</Title>
        <Blank height={2} />
        <Separator />
        <Blank height={2} />
        <ServicePeriodAndPrice
          serviceDate={serviceDate}
          serviceDays={serviceDays}
          servicePrice={servicePrice}
        />
        <Separator />
        <Blank height={2} />
        <Notifications />
        <Blank height={6} />
        <ConfirmButtonContainer>
          <ConfirmButton onClick={onClose}>확인</ConfirmButton>
        </ConfirmButtonContainer>
      </PriceModalViewContainer>
    </ModalContainer>
  );
};

const PriceModalViewContainer = styled.div``;

const Separator = styled.div`
  width: 100%;
  height: 0.1vw;
  background-color: ${color.gray_400};
`;

const Title = styled.div`
  font-size: 4vw;
`;

const ConfirmButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ConfirmButton = styled.div`
  background-color: ${color.gray_150};
  border-radius: 1vw;
  padding: 1.5vw 10vw;
  margin-right: 5vw;
  cursor: pointer;
`;
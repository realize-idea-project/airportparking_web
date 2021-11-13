import React, { FC } from 'react';
import styled from 'styled-components';

import { ModalContainer, Blank } from '../../common';
import { color } from '../../../constants';
import { ServicePeriodAndPrice } from './PriceModalViewItems';

interface Props {
  onClose: () => void;
  dateFrom: string;
  dateTo: string;
  serviceDays: number;
}

export const PriceModal: FC<Props> = ({ onClose, dateFrom, dateTo, serviceDays }) => {

  return (
    <ModalContainer onClickCloseButton={onClose} onClickOverlay={onClose}>
      <PriceModalViewContainer>
        <Title>예상 결제금액</Title>
        <Blank height={2} />
        <Separator />
        <Blank height={2} />
        <ServicePeriodAndPrice dateFrom={dateFrom} dateTo={dateTo} serviceDays={serviceDays} />

      </PriceModalViewContainer>
    </ModalContainer>
  );
};

const PriceModalViewContainer = styled.div`
  /* background-color: red; */
`;

const Separator = styled.div`
  width: 100%;
  height: 0.1vw;
  background-color: ${color.gray_400};
`;

const Title = styled.div`
  font-size: 4vw;
`;

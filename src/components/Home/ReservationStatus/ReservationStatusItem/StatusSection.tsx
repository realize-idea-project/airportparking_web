import React, { FC } from 'react';
import styled from 'styled-components';
import { color } from '../../../../constants'
import { ReservationStatus } from '../types';

interface Props {
  text: string;
  status: ReservationStatus;
  flexProportion: number;
}

export const StatusSection: FC<Props> = ({ flexProportion, text, status }) => {

  const isReserved = status === 'reserved';

  return (
    <ReservationTextContainer flex={flexProportion}>
      {text}
    </ReservationTextContainer>
  );
};

const ReservationTextContainer: any = styled.div`
  flex: ${({ flex }: any) => flex};
  font-size: 3.5vw;
  display: flex;
  padding-left: 3vw;
  align-items: center;
`;
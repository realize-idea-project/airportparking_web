import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  plateNumber: string
  statusText: string;
  textColor: string;
  flexProportion: number;
}

export const StatusSection: FC<Props> = ({
  flexProportion,
  name,
  plateNumber,
  statusText,
  textColor
}) => {

  return (
    <ReservationTextContainer flex={flexProportion} color={textColor}>
      <span>{`${name}님의 ${plateNumber}`}</span>
      <HighlightSpan color={textColor}>{statusText}</HighlightSpan>
      <span>입니다.</span>
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

const HighlightSpan: any = styled.span`
  color: ${({ color }: any) => color};
  padding-left: 1vw;
`;
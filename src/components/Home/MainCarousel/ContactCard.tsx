import React, { FC } from 'react';
import styled from 'styled-components';
import { Blank } from '../../common';
import { ScreenBreakPoint } from '../../../constants';

const { Mobile, Desktop } = ScreenBreakPoint;

export const ContactCard: FC = () => {

  return (
    <Container>
      <ContactContainer>
        <Blank height={20} />
        <ContactTitle>최고의주차장 라라주차</ContactTitle>
        <Blank height={10} />
        <Separator />
        <Blank height={20} />
        <ContactText>예약문의 : <ContactYellow>010-6202-2114</ContactYellow></ContactText>
        <ContactText>입출고 : <ContactYellow>010-2040-6634</ContactYellow></ContactText>
      </ContactContainer>
    </Container>
  );
};

const Container = styled.div``;

const ContactContainer = styled.div`
  position: absolute;
  z-index: 1;
  padding: 0 5vw;
  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  flex-direction: column;
  
  @media only screen and (max-width: ${Mobile}px) {
    width: 82vw;
    min-width: 300px;
    height: 48vw;
    min-height: 150px;

    top: 22vw;
    left: 4vw;
  }

  @media only screen and (min-width: ${Mobile}px) {
    display: none;
  }

  @media only screen and (min-width: ${Desktop}px) {
    display: none;
  }
  
`;

const ContactTitle = styled.div`
  color: white;
  font-size: 3vw;
`;

const Separator = styled.div`
  width: 80px;
  height: 1px;
  background-color: white;
`;

const ContactText = styled.div`
  font-size: 6vw;
  font-weight: 700;
  color: white;
`;

const ContactYellow = styled.span`
  color: yellow;
`;
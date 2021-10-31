import React, { FC } from 'react';
import styled from 'styled-components';
import { Blank } from '../../common';
import { ScreenBreakPoint } from '../../../constants';

const { MobileXS, MobileS, MobileM, MobileL, PadS, Desktop } = ScreenBreakPoint;

export const ContactCard: FC = () => {

  return (
    <Container>
      <ContactContainer>
        <Blank height={5} />
        <ContactTitle>최고의주차장 라라주차</ContactTitle>
        <Blank height={1} />
        <Separator />
        <Blank height={4} />
        <ContactText>예약문의 : <ContactYellow>010-6202-2114</ContactYellow></ContactText>
        <Blank height={2} />
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

  height: 48vw;
  width: 80vw;
  min-height: 150px;
  left: 4.5vw;

  @media only screen and (${ MobileXS }) {
    bottom: 2vw;
  }

  @media only screen and (${ MobileS }) {
    bottom: 2vw;
  }

  @media only screen and (${ MobileM }) {
    bottom: 2vw;
  }

  @media only screen and (${ MobileL }) {
    bottom: 2vw;
  }

  @media only screen and (${ PadS }) {
    bottom: 2vw;
  }

  @media only screen and (${ Desktop }) {
    bottom: 2vw;
  }
`;

const ContactTitle = styled.div`
  color: white;
  font-size: 4vw;
`;

const Separator = styled.div`
  width: 21vw;
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
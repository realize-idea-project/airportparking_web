import React, { FC } from 'react';
import styled from 'styled-components';
import { Blank } from '../common';
import { px } from '../../utils';


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
  background-color: rgba(0, 0, 0, 0.6);
  width: ${px(300)};
  height: ${px(180)};

  top: ${px(160)};
  left: ${px(17)};
  
  position: absolute;
  z-index: 1;
  padding: 0 ${px(20)};

  display: flex;
  flex-direction: column;
`;

const ContactTitle = styled.div`
  color: white;
  font-size: ${px(12)};
`;

const Separator = styled.div`
  width: ${px(80)};
  height: ${px(1)};
  background-color: white;
`;

const ContactText = styled.div`
  font-size: ${px(24)};
  font-weight: 700;
  color: white;
`;

const ContactYellow = styled.span`
  color: yellow;
`;
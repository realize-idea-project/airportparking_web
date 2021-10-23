import React, { FC } from 'react';
import styled from 'styled-components';
import { RouterPathType } from 'types';
import { Blank } from '../../common';
import { px } from '../../../utils';
import { RouterPath , images } from '../../../constants';

interface Props {
  bgColor: string;
  question: string;
  questionDate: string;
  onClick: (path: RouterPathType) => void;
}

export const QnACard: FC<Props> = ({ bgColor, question, questionDate, onClick }) => {
  return (
    <Container bgColor={bgColor} onClick={() => onClick(RouterPath.QnA)}>
      <div>
        <Qmark />
      </div>
      <QnAContainer>
        <QnA>
          {question}
        </QnA>
        {/* <Blank height={10} /> */}
        <DateContainer>
          <CalendarIcon src={images.calendarIcon} />
          <Blank width={10} />
          <Date>{questionDate}</Date>
        </DateContainer>
      </QnAContainer>
    </Container>
  );
}

const Container: any = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ bgColor }: any) => bgColor};
  width: 50%;
  height: ${px(140)};

  cursor: pointer;
`;

const QnAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${px(15)};
  height: 100%;
`;

const QnA = styled.div`
  font-size: ${px(16)};
`;

const Qmark = styled.div`
  background-image: url(${images.qIcon});
  width: ${px(25)};
  height: ${px(25)};
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CalendarIcon = styled.img``;

const Date = styled.div``;
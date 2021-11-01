import React, { FC } from 'react';
import styled from 'styled-components';
import { RouterPathType } from 'types';
import { RouterPath , images, ScreenBreakPoint } from '../../../../constants';
import { CalendarAndDate } from './CalendarAndDate';


interface Props {
  bgColor: string;
  question: string;
  questionDate: string;
  onClick: (path: RouterPathType) => void;
}

const { MobileL, PadS } = ScreenBreakPoint;

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
        <CalendarAndDate date={questionDate} />
        {/* <DateContainer>
          <CalendarIcon src={images.calendarIcon} />
          <Blank width={3} />
          <Date>{questionDate}</Date>
        </DateContainer> */}
      </QnAContainer>
    </Container>
  );
}

const Container: any = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ bgColor }: any) => bgColor};
  width: 50%;
  height: 45vw;

  cursor: pointer;
`;

const QnAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3vw;
  height: 100%;
`;

const QnA = styled.div`
  font-size: 5vw;
`;

const Qmark = styled.div`
  background-image: url(${images.qIcon});
  background-size: cover;
  width: 10vw;
  height: 10vw;

  max-width: 35px;
  max-height: 35px;

  @media only screen and (${ MobileL }) {
    max-width: 40px;
    max-height: 40px;
  }

  @media only screen and (${ PadS }) {
    max-width: 60px;
    max-height: 60px;
  }
`;


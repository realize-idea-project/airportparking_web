import React, { FC } from 'react';
import styled from 'styled-components';
import { RouterPathType } from 'types';
import { Blank } from '../../common';
import { QnAHeader } from './QnAHeader';
import { QnACard } from './QnACard';


const getQnADate = () => {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() -1);
  currentDate.setDate(currentDate.getDate() - 4);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth().toString().length === 1 ? `0${currentDate.getMonth()}` : `${currentDate.getMonth()}`;
  const date = currentDate.getDate().toString().length === 1 ? `0${currentDate.getDate()}` : `${currentDate.getDate()}`;

  return `${year}-${month}-${date}`;
}

const cardContents = [
  {
    id: 0,
    question: '[질문] 도착해서 차량을 어떻게 인도받아야 할나요?',
    questionDate: `${getQnADate()}`,
    backgroundColor: '#f8f6f3',
  },
  {
    id: 1,
    question: '[질문] 예약시간전에 공항에 도착하면 되나요?',
    questionDate: `${getQnADate()}`,
    backgroundColor: '#eaebef',
  },
  {
    id: 2,
    question: '[질문] 당일예약도 가능한가요?',
    questionDate: `${getQnADate()}`,
    backgroundColor: '#eaebef',
  },
  {
    id: 3,
    question: '[질문] 예약은 어떻게 하나요?',
    questionDate: `${getQnADate()}`,
    backgroundColor: '#f8f6f3',
  },
];

interface Props {
  onClickShowMore: (path: RouterPathType) => void;
  onClickCard: (path: RouterPathType) => void;
}

export const QnA: FC<Props> = ({ onClickShowMore, onClickCard }) => {
  return (
    <Container>
      <QnAHeader onClickShowMore={onClickShowMore}/>
      <Blank height={15} />
      <CardContainer>
        {
          cardContents.map(({id, question, questionDate, backgroundColor}) => {
            return (
              <QnACard
                key={id}
                question={question}
                questionDate={questionDate}
                bgColor={backgroundColor}
                onClick={onClickCard}
              />
            );
          })
        }
      </CardContainer>


    </Container>
  );
}

const Container = styled.div`
  background-color: white;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

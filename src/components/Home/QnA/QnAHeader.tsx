import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  onClickShowMore: () => void;
}

export const QnAHeader: FC<Props> = ({ onClickShowMore }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>자주하는 질문</Title>
        <ShowMore onClick={onClickShowMore}>더보기</ShowMore>
      </TitleContainer>
      <Separator />
    </Container>
  );
}

const Container = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6vw 3vw 3vw 3vw;


`;

const Title = styled.div`
  font-size: 6.5vw;
  color: #8a0026;
  font-weight: 800;
`;

const Separator = styled.div`
  border-bottom: 1px solid gray;
  flex: 1;
`;

const ShowMore = styled.div`
  font-size: 4vw;
  color: gray;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
`;
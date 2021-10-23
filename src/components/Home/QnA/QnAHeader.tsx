import React, { FC } from 'react';
import styled from 'styled-components';
import { RouterPathType } from 'types';
import { px } from '../../../utils';
import { RouterPath } from '../../../constants';

interface Props {
  onClickShowMore: (path: RouterPathType) => void;
}

export const QnAHeader: FC<Props> = ({ onClickShowMore }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>자주하는 질문</Title>
        <ShowMore onClick={() => onClickShowMore(RouterPath.QnA)}>더보기</ShowMore>
      </TitleContainer>
      <Separator />
    </Container>
  );
}

const Container = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${px(20)} ${px(10)};
`;

const Title = styled.div`
  font-size: ${px(20)};
  color: #8a0026;
  font-weight: 800;
`;

const Separator = styled.div`
  border-bottom: 1px solid gray;
  flex: 1;
`;

const ShowMore = styled.div`
  font-size: ${px(14)};
  color: gray;
  padding-top: ${px(10)};
  font-weight: bold;
  cursor: pointer;
`;
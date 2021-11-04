/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import styled from 'styled-components';
import { RouterPathType } from 'types';
import { images, RouterPath } from '../../../constants'
import { Blank } from '../../common';


interface Props {
  subTitle: string;
  onClickShowMore: (path: RouterPathType) => void;
}

export const ReservationStatusHeader: FC<Props> = ({ subTitle, onClickShowMore  }) => {
  return (
    <Container>
      <TitleContainer>
        <SubTitle>{subTitle}</SubTitle>
        <Blank height={0.5} />
        <Title>RESERVATION STATUS</Title>
      </TitleContainer>
      <ShowMoreIconContainer onClick={() => onClickShowMore(RouterPath.ReservationStatus)}>
        <ShowMoreIcon src={images.plusIcon} />
      </ShowMoreIconContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`;

const TitleContainer = styled.div``;

const SubTitle = styled.div`
  font-size: 4.5vw;
`;

const Title = styled.div`
  font-size: 6vw;
`;

const ShowMoreIconContainer = styled.div`
  width: 5vw;
  height: 5vw;

  max-width: 30px;
  max-height: 30px;

  display: flex;
  align-self: flex-end;
  padding-bottom: 1vw;
`;

const ShowMoreIcon = styled.img`
  width: 100%;
  height: 100%;
`;
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { RouterPathType } from '../../types';
import { withLayout } from '../../shared';
import { PageContainer } from '../../components/common';
import { homeImages, homeFacility } from '../../constants';

import { MainCarousel, MenuBar, QnA, ReservationStatus, Facility, Location } from '../../components/Home';


export const Home = withLayout(() => {
  const history = useHistory();

  const mainImageList = Object.values(homeImages);
  const parkinglotImageList = Object.values(homeFacility);

  const moveTo = (path: RouterPathType) => () => {
    history.push(path)
  };

  return (
    <>
      <PageContainer>
        <MainCarousel imagelist={mainImageList}/>
        <MenuBar onClick={moveTo} />
        <ContentsContainer>
          <QnA  onClickCard={moveTo} onClickShowMore={moveTo} />
          <ReservationStatus onClickItem={moveTo} onClickShowMore={moveTo}/>
          <Facility imagelist={parkinglotImageList}  onClickShowMore={moveTo}/>
          <Location onClickShowMore={moveTo} />
        </ContentsContainer>
      </PageContainer>
    </>
  );
});

const ContentsContainer = styled.div`
`;
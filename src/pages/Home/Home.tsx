import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { RouterPathType } from 'types';
import { withLayout } from '../../shared';
import { MainCarousel, MenuBar, QnA } from '../../components/Home';
import { PageContainer } from '../../components/common';
import { homeImages } from '../../constants';


export const Home = withLayout(() => {
  const history = useHistory();

  const mainImageList = Object.values(homeImages);

  const moveTo = (path: RouterPathType) =>{
    history.push(path)
  };

  return (
    <>
      <PageContainer>
        <MainCarousel imagelist={mainImageList}/>
        <MenuBar onClick={moveTo} />
        <ContentsContainer>
          <QnA  onClickCard={moveTo} onClickShowMore={moveTo} />
        </ContentsContainer>
      </PageContainer>
    </>
  );
});

const ContentsContainer = styled.div`
  padding: 0 3vw;
`;
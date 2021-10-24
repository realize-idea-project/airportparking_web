import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { RouterPathType } from 'types';
import { withLayout } from '../../shared';
import { MainCarousel, MenuBar, QnA } from '../../components/Home';
import { ScreenBreakPoint, homeImages } from '../../constants';
import { px, percent } from '../../utils';



const { Mobile, Desktop } = ScreenBreakPoint;

export const Home = withLayout(() => {
  const history = useHistory();

  const mainImageList = Object.values(homeImages);

  const moveTo = (path: RouterPathType) =>{
    history.push(path)
  };

  return (
    <Container>
      <MainCarousel imagelist={mainImageList}/>
      <MenuBar onClick={moveTo} />
      <ContentsContainer>
        <QnA  onClickCard={moveTo} onClickShowMore={moveTo} />
      </ContentsContainer>
    </Container>
  );
});

const Container = styled.div`
  @media only screen and (max-width: ${px(Mobile)}) {
    padding-top: ${px(50)};
  }

  @media only screen and (min-width: ${px(Mobile)}) {
    padding-top: ${px(120)};
  }

  @media only screen and (min-width: ${px(Desktop)}) {
    padding-top: ${px(120)};
  }
`;


const ContentsContainer = styled.div`
  padding: 0 ${px(10)};
`;
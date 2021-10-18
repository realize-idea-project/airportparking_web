import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { withLayout } from '../../shared';
// import { homeImage } from '../../constants/images';
import { ScreenBreakPoint, RouterPath } from '../../constants';
import { px, percent } from '../../utils';


const { Mobile, Desktop } = ScreenBreakPoint;

export const Home = withLayout(() => {
  const history = useHistory();

  // const moveTo = (path: RouterPath) => () =>{
  //   history.push(path)
  // };

  return (
    <Container>
      {/* <CaravanContainer onClick={moveTo(RouterPath.Caravan)}>
        <CaravanDimmedScreen>View More</CaravanDimmedScreen>
        <Img src={homeImage.caravan} />
      </CaravanContainer> */}
      <Seperator />
      {/* <CoffeeContainer onClick={moveTo(RouterPath.Coffee)}>
        <CoffeeDimmedScreen>View More</CoffeeDimmedScreen>
        <Img src={homeImage.coffee} />
      </CoffeeContainer> */}
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

const CaravanDimmedScreen = styled.div`
  background-color: rgba(0, 0, 0, .5);
  color: white;

  width: 100vw;

  z-index: 9;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
`;

const CaravanContainer = styled.div`
  position: relative;
  height: 40vw;

  &:hover {
    cursor: pointer;
    ${CaravanDimmedScreen} {
      display: flex;
      justify-content: center;
      padding-top: ${percent(5)};
      font-size: 2vw;
      height: 35.5vw;
    }
  }
`;

const CoffeeDimmedScreen = styled.div`
  background-color: rgba(0, 0, 0, .5);
  color: white;

  height: 100%;
  width: 100vw;

  z-index: 9;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
`;

const CoffeeContainer = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
    ${CoffeeDimmedScreen} {
      display: flex;
      justify-content: center;
      padding-top: ${percent(5)};
      font-size: 2vw;
      height: 39vw;
    }
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Seperator = styled.div`
  background-color: white;
  height: 1vw;
`;
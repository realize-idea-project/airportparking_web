/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { ScreenBreakPoint, RouterPath, images, DeviceSize, HeaderHeight } from '../../../constants';
import { screenWidth } from '../../../utils'
import { RouterPathType } from '../../../types';

const { MobileXS, MobileS, MobileM, MobileL, PadS, Desktop } = ScreenBreakPoint;
const { Desktop_S } = DeviceSize;


export const Header = () => {
  const history = useHistory();

  const handleClickLogo = (router: RouterPathType) => () => {
    if (screenWidth() <= Desktop_S) window.scrollTo(0, 0);

    if (history.location.pathname === RouterPath.Home) return;
    history.push(router);
  };

  return (
    <Container>
      <LogoContainer onClick={handleClickLogo(RouterPath.Home)} >
        <Image src={images.fullLogo} />
      </LogoContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  z-index: 2;
  position: fixed;
  background-color: tomato;
  

  @media only screen and (${ MobileXS }) {
    height: ${HeaderHeight.mobileXS};
    background-color: blue;
  }

  @media only screen and (${ MobileS }) {
    height: ${HeaderHeight.mobileS};
    background-color: red;
  }

  @media only screen and (${ MobileM }) {
    height: ${HeaderHeight.mobileM};
    background-color: yellow;
  }

  @media only screen and (${ MobileL }) {
    height: ${HeaderHeight.mobileL};
    background-color: green;
  }

  @media only screen and (${ PadS }) {
    height: ${HeaderHeight.padS};
    background-color: gray;
  }

  @media only screen and (${ Desktop }) {
    height: ${HeaderHeight.desktop};
    background-color: tomato;
  }
`;

const LogoContainer = styled.div`
  cursor: pointer;

  @media only screen and (${ MobileXS }) {
    height: ${HeaderHeight.mobileXS};
    background-color: blue;
  }

  @media only screen and (${ MobileS }) {
    height: ${HeaderHeight.mobileS};
    background-color: red;
  }

  @media only screen and (${ MobileM }) {
    height: ${HeaderHeight.mobileM};
    background-color: yellow;
  }

  @media only screen and (${ MobileL }) {
    height: ${HeaderHeight.mobileL};
    background-color: green;
  }

  @media only screen and (${ PadS }) {
    height: ${HeaderHeight.padS};
    background-color: gray;
  }

  @media only screen and (${ Desktop }) {
    height: ${HeaderHeight.desktop};
    background-color: tomato;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

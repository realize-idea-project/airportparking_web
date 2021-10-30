/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { ScreenBreakPoint, RouterPath, images, DeviceSize } from '../../../constants';
import { screenWidth } from '../../../utils'
import { RouterPathType } from '../../../types';

const { MobileXS, MobileS, MobileM, MobileL, PadS, Desktop } = ScreenBreakPoint;
const { Desktop_S } = DeviceSize;

export const headerHeight = {
  mobile: '50px',
  pad: '100px',
  desktop: '100px',
}

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
    height: ${headerHeight.mobile};
    background-color: blue;
  }

  @media only screen and (${ MobileS }) {
    height: ${headerHeight.mobile};
    background-color: red;
  }

  @media only screen and (${ MobileM }) {
    height: ${headerHeight.mobile};
    background-color: yellow;
  }

  @media only screen and (${ MobileL }) {
    height: ${headerHeight.mobile};
    background-color: green;
  }

  @media only screen and (${ PadS }) {
    height: ${headerHeight.pad};
    background-color: gray;
  }

  @media only screen and (${ Desktop }) {
    height: ${headerHeight.desktop};
    background-color: tomato;
  }
`;

const LogoContainer = styled.div`
  cursor: pointer;

  @media only screen and (${ MobileXS }) {
    height: ${headerHeight.mobile};
    background-color: blue;
  }

  @media only screen and (${ MobileS }) {
    height: ${headerHeight.mobile};
    background-color: red;
  }

  @media only screen and (${ MobileM }) {
    height: ${headerHeight.mobile};
    background-color: yellow;
  }

  @media only screen and (${ MobileL }) {
    height: ${headerHeight.mobile};
    background-color: green;
  }

  @media only screen and (${ PadS }) {
    height: ${headerHeight.pad};
    background-color: gray;
  }

  @media only screen and (${ Desktop }) {
    height: ${headerHeight.desktop};
    background-color: tomato;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

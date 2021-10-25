import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { ScreenBreakPoint, RouterPath, images } from '../../../constants';
import { px, screenWidth } from '../../../utils'

import { RouterPathType } from '../../../types';
import { TabDefinitions } from './types';


const { Mobile, Desktop } = ScreenBreakPoint;

const tabDefinitions: TabDefinitions = new Map()
  .set(RouterPath.AboutUs, { title: '주차장소개' })
  .set(RouterPath.Instruction, { title: '이용안내'})
  .set(RouterPath.Reservation, { title: '온라인예약' })
  .set(RouterPath.Price, { title: '주차요금' })
  .set(RouterPath.Facility, { title: '주차장시설' })
  .set(RouterPath.ContactUs, { title: '고객센터' })

export const Header = () => {
  const history = useHistory();

  const handleClickLogo = (router: RouterPathType) => () => {
    if (screenWidth() <= Mobile) window.scrollTo(0, 0);

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
  z-index: 1;
  position: fixed;

  @media only screen and (max-width: ${Mobile}px) {
    height: 50px;
  }

  @media only screen and (min-width: ${Mobile}px) {
    height: 120px;
  }

  @media only screen and (min-width: ${Desktop}px) {
    height: 120px;
  }
`;

const LogoContainer = styled.div`
  cursor: pointer;

  @media only screen and (max-width: ${px(Mobile)}) {
    width: 180px;
  }

  @media only screen and (min-width: ${px(Mobile)}) {
    /* height: 120px;; */
  }

  @media only screen and (min-width: ${px(Desktop)}) {
    /* height: 120px;; */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

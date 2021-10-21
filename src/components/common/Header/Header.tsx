import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { ScreenBreakPoint, RouterPath, images } from '../../../constants';
import { percent, px, screenWidth } from '../../../utils'

import { RouterPathType } from '../../../types';
import { TabDefinitions } from './types';

import { SideMenuBar } from './SideMenuBar';
import { TopMenuTabs } from './TopMenuTabs';

const { Mobile, Desktop } = ScreenBreakPoint;

const tabDefinitions: TabDefinitions = new Map()
  .set(RouterPath.AboutUs, { title: '주차장소개' })
  .set(RouterPath.Instruction, { title: '이용안내'})
  .set(RouterPath.Reservation, { title: '온라인예약' })
  .set(RouterPath.Price, { title: '주차요금' })
  .set(RouterPath.Facility, { title: '주차장시설' })
  .set(RouterPath.ContactUs, { title: '고객센터' })

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const history = useHistory();

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const moveToPage = (router: RouterPathType ) => () => {
    history.push(router);
    closeMenu();
  };

  const handleClickLogo = (router: RouterPathType) => () => {
    if (screenWidth() <= Mobile) window.scrollTo(0, 0);

    history.push(router);
    
  };

  return (
    <Container>
      <FlexContainer>
        <SideMenuIcon onClick={openMenu}>
          <Image src={images.hamburger} />
        </SideMenuIcon>
        <LogoContainer onClick={handleClickLogo(RouterPath.Home)}>
          라라주차
          {/* <HeaderLogo /> */}
        </LogoContainer>
        <NavigationTabContainer>
          <TopMenuTabs onClickTab={moveToPage} tabs={tabDefinitions} />
        </NavigationTabContainer>
      </FlexContainer>
      {isMenuOpen && <SideMenuBar onClose={closeMenu} onClickTab={moveToPage} tabs={tabDefinitions}/>}
    </Container>
  );
}

const Container = styled.div`
  @media only screen and (max-width: ${px(Mobile)}) {
    height: ${px(50)};
    background-color: white;
    position: fixed;
    z-index: 10;
  }

  @media only screen and (min-width: ${px(Mobile)}) {
    height: ${px(120)};
    position: fixed;
    background-color: white;
    z-index: 10;
  }

  @media only screen and (min-width: ${px(Desktop)}) {
    height: ${px(120)};
    min-width: ${px(1200)};
    width: 100vw;
    position: fixed;
    background-color: white;
    z-index: 10;
  }
`;

const FlexContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: purple;

  @media only screen and (max-width: ${px(Mobile)}) {
    padding-left: ${px(80)};
    width: 100vw;
  }

  @media only screen and (min-width: ${px(Mobile)}) {
    margin-left: ${percent(3)};
    width: 100vw;
  }

  @media only screen and (min-width: ${px(Desktop)}) {
    width: ${percent(80)};
    margin-left: ${percent(3)};
  }
`;

const LogoContainer = styled.div`
  cursor: pointer;
  background-color: green;

  @media only screen and (min-width: ${px(Desktop)}) {
    min-width: ${px(150)};
  }
`;

const SideMenuIcon = styled.div`
  position: absolute;
  left: ${px(8)};
  display: none;
  max-width: ${px(18)};
  max-height: ${px(18)};
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: ${px(Mobile)}) {
    display: flex;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const NavigationTabContainer = styled.div`
  display: flex;
  

  @media only screen and (max-width: ${px(Mobile)}) {
    display: none;
  }

  @media only screen and (min-width: ${px(Mobile)}) {
    margin-left: ${percent(10)};
  }

  @media only screen and (min-width: ${px(Desktop)}) {
    width: ${px(1200)};
    margin-left: ${percent(12)};
  }
`;

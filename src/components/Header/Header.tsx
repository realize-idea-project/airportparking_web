import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { ScreenBreakPoint, RouterPath, images } from '../../constants';
import { percent, px, screenWidth } from '../../utils'

import { SideMenuBar } from './SideMenuBar';
import { TopMenuTabs } from './TopMenuTabs';

const { Mobile, Desktop } = ScreenBreakPoint;



export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const history = useHistory();

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const moveToPage = (router: any ) => () => {
    history.push(router);
    closeMenu();
  };

  const handleClickLogo = (router: any) => () => {
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
          {/* <HeaderLogo /> */}
        </LogoContainer>
        <NavigationTabContainer>
          {/* <TopMenuTabs onClickTab={moveToPage} tabs={tabDefinitions} /> */}
        </NavigationTabContainer>
      </FlexContainer>
      {/* {isMenuOpen && <SideMenuBar onClose={closeMenu} onClickTab={moveToPage} tabs={tabDefinitions}/>} */}
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

  @media only screen and (max-width: ${px(Mobile)}) {
    justify-content: center;
    align-items: center;
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

  @media only screen and (min-width: ${px(Desktop)}) {
    min-width: ${px(150)};
  }
`;

const SideMenuIcon = styled.div`
  position: absolute;
  left: ${px(8)};
  display: none;
  max-width: ${px(25)};
  max-height: ${px(25)};
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

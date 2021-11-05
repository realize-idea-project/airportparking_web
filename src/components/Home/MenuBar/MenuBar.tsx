import React, { FC } from 'react';
import styled from 'styled-components';
import { RouterPathType } from 'types';
import { Blank } from '../../common';
import { px } from '../../../utils';
import { homeMenuBar, RouterPath, ScreenBreakPoint } from '../../../constants';



interface MenuBarIcon {
  image: string;
  route: RouterPathType;
}

const iconlist: Map<string, MenuBarIcon> = new Map()
  .set('회사소개', { image: homeMenuBar.company, route: RouterPath.AboutUs })
  .set('이용안내', { image:homeMenuBar.info, route: RouterPath.Instruction })
  .set('주차요금', { image: homeMenuBar.price, route: RouterPath.Price })
  .set('예약하기', { image: homeMenuBar.reservation, route: RouterPath.Reservation });
  
const { MobileXS, MobileS, MobileM, MobileL, PadS, Desktop } = ScreenBreakPoint;

interface Props {
  onClick: (path: RouterPathType) => () => void;
}

export const MenuBar: FC<Props> = ({ onClick }) => {
  const icons = Array.from(iconlist);

  return (
    <Container>
      {icons.map(([title, { image, route }]) => {
        return (
          <MenuTab key={title} onClick={onClick(route)}>
            <IconContainer>
              <Icon src={image} />
            </IconContainer>
            <Blank height={1.3} maxHeight={6} />
            <MenuTitle>{title}</MenuTitle>
          </MenuTab>
        );
      })}
    </Container>
  )
};

const Container = styled.div`
  background-image: url(${homeMenuBar.background});
  width: 100%;
  height: 24vw;
  max-height: 90px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (${ Desktop }) {
    max-height: 100px;
  }
`;

const IconContainer = styled.div`
  width: 12vw;
  height: 12vw;

  @media only screen and (${ MobileS }) {
    max-width: 50px;
    max-height: 50px;
  }
`;

const MenuTitle = styled.div`
  font-size: 4vw;
  color: white;
  font-weight: 700;

  @media only screen and (${ MobileS }) {
    font-size: 13px;
  }
`;


const MenuTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

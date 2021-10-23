import React, { FC } from 'react';
import styled from 'styled-components';
import { RouterPathType } from 'types';
import { Blank } from '../../common';
import { px } from '../../../utils';
import { homeMenuBar, RouterPath } from '../../../constants';

interface MenuBarIcon {
  image: string;
  route: RouterPathType;
}

const iconlist: Map<string, MenuBarIcon> = new Map()
  .set('회사소개', { image: homeMenuBar.company, route: RouterPath.AboutUs })
  .set('이용안내', { image:homeMenuBar.info, route: RouterPath.Instruction })
  .set('주차요금', { image: homeMenuBar.price, route: RouterPath.Price })
  .set('예약하기', { image: homeMenuBar.reservation, route: RouterPath.Reservation });
  

interface Props {
  onClick: (destiny: RouterPathType) => void;
}

export const MenuBar: FC<Props> = ({ onClick }) => {
  const icons = Array.from(iconlist);

  return (
    <Container>
      {icons.map(([title, { image, route }]) => {
        return (
          <div key={title}>
            <IconContainer onClick={() => onClick(route)}>
              <Icon src={image} />
              <Blank height={5} />
              <IconTitle>{title}</IconTitle>
            </IconContainer>
          </div>
        )
      })}
    </Container>
  )
};

const Container = styled.div`
  background-image: url(${homeMenuBar.background});
  width: 100%;
  height: ${px(70)};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const Icon = styled.img`
  width: ${px(35)};
  height: ${px(35)};
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  

  align-items: center;
`;

const IconTitle = styled.div`
  font-size: ${px(14)};
  color: white;
  font-weight: 700;
`;
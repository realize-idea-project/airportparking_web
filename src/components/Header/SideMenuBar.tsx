import React, { FC } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { createPortal } from 'react-dom';
import { Blank } from '../common';
import { RouterPath, ScreenBreakPoint } from '../../constants';

import { px, percent } from '../../utils';

// interface Props {
//   onClose: () => void;
//   onClickTab: (route: RouterPath) => () => void;
//   tabs: TabDefinitions;
// }

const { Desktop } = ScreenBreakPoint;

export const SideMenuBar: FC<any> = ({ onClose, tabs, onClickTab }) => {

  const { pathname } = useLocation();

  return createPortal(
    <PositionRelativeContainer>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <TabContainer>
          {/* {
            Array.from(tabs).map(([route, detail]) => {
              return (
                <div key={uuidv4()}>
                  <PageTab 
                    onClick={onClickTab(route)}
                    isActive={pathname === route}
                  >{detail.title}</PageTab>
                  <Blank height={10} />
                </div>
              )
            })
          } */}
        </TabContainer>
      </ModalContainer>
    </PositionRelativeContainer>,
    document.getElementById('portal') as HTMLElement,
  );
};

const PositionRelativeContainer = styled.div`
  position: relative;
  
  @media only screen and (min-width: ${px(Desktop)}) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: rgba(0, 0, 0, 0.7); */
  z-index: 10;
`;

const ModalContainer = styled.div`
  width: ${percent(40)};
  height: ${percent(100)};
  background-color: white;

  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.6);

  position: fixed;
  top: 0;
  left: 0;

  z-index: 9998;
`;

const TabContainer = styled.div`
  margin-top: ${px(50)};

`;

const PageTab = styled.div<{isActive: boolean}>`
  font-size: 4vw;
  line-height: 7vw;
  padding-left: ${px(18)};
  color:  ${({ isActive }: any) => isActive ? '#414241' : 'gray' };
  font-weight: ${({ isActive }: any) => isActive ? 'bold' : 'normal' };
`;


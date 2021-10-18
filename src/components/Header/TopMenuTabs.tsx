
import React, { FC } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';

import { RouterPath, ScreenBreakPoint } from '../../constants';

import { px, percent } from '../../utils';

const { Mobile, Desktop } = ScreenBreakPoint;

// interface Props {
//   onClickTab: (route: RouterPath) => () => void;
//   tabs: TabDefinitions;
// }

export const TopMenuTabs: FC<any> = ({ tabs, onClickTab }) => {
  const { pathname } = useLocation();
  return (
    <>
      {/* {
        Array.from(tabs).map(([route, detail]) => {
          return (
            <TabContainer key={uuidv4()}>
              <PageTab
                onClick={onClickTab(route)}
                isActive={pathname === route}
              >
                {detail.title}
              </PageTab>
            </TabContainer>
          );
        })
      } */}
    </>
  );
};

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const PageTab = styled.div<{isActive: boolean}>`
  text-align: center;
  color:  ${({ isActive }: any) => isActive ? '#414241' : 'gray' };
  font-weight: ${({ isActive }: any) => isActive ? 'bold' : 'normal' };
  margin-right: ${percent(10)};

  @media only screen and (min-width: ${px(Mobile)}) {
    width: ${px(100)};
    font-size: ${px(16)};
    line-height: ${px(20)};
  }

  @media only screen and (min-width: ${px(Desktop)}) {
    width: ${px(150)};
    font-size: ${px(20)};
    line-height: ${px(24)};
  }
`;


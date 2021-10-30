
import React, { FC } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';

import { ScreenBreakPoint } from '../../../constants';
import { RouterPathType } from '../../../types'
import { TabDefinitions } from './types';

import { px, percent } from '../../../utils';



interface Props {
  onClickTab: (route: RouterPathType) => () => void;
  tabs: TabDefinitions;
}

export const TopMenuTabs: FC<Props> = ({ tabs, onClickTab }) => {
  const { pathname } = useLocation();
  return (
    <>
      {
        Array.from(tabs).map(([route, detail], index) => {
          return (
            <TabContainer key={index.toString()}>
              <PageTab
                onClick={onClickTab(route)}
                isActive={pathname === route}
              >
                {detail.title}
              </PageTab>
            </TabContainer>
          );
        })
      }
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


`;


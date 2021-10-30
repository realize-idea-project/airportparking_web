import styled from 'styled-components';
import { ScreenBreakPoint } from '../../../constants';
import { headerHeight } from '../Header';

const { MobileS, MobileM, Desktop } = ScreenBreakPoint;

export const PageContainer = styled.div`
  
  @media only screen and (${ MobileS }) {
    padding-top: ${headerHeight.mobile}
  }

  @media only screen and (${ MobileM }) {
    padding-top: ${headerHeight.mobile}
    
  }

  @media only screen and (${ Desktop }) {
    padding-top: ${headerHeight.desktop};
  }
`;
import styled from 'styled-components';
import { ScreenBreakPoint } from '../../../constants';
import { headerHeight } from '../Header';

const { MobileXS, MobileS, MobileM, MobileL, PadS, Desktop } = ScreenBreakPoint;

export const PageContainer = styled.div`

  @media only screen and (${ MobileXS }) {
    padding-top: ${headerHeight.mobile};
  }

  @media only screen and (${ MobileS }) {
    padding-top: ${headerHeight.mobile}
  }

  @media only screen and (${ MobileM }) {
    padding-top: ${headerHeight.mobile}
  }

  @media only screen and (${ MobileL }) {
    padding-top: ${headerHeight.mobile}
  }

  @media only screen and (${ PadS }) {
    padding-top: ${headerHeight.pad};
  }

  @media only screen and (${ Desktop }) {
    padding-top: ${headerHeight.desktop};
  }
`;
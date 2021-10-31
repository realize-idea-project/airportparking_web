import styled from 'styled-components';
import { ScreenBreakPoint, HeaderHeight } from '../../../constants';

const { MobileXS, MobileS, MobileM, MobileL, PadS, Desktop } = ScreenBreakPoint;

export const PageContainer = styled.div`

  @media only screen and (${ MobileXS }) {
    padding-top: ${HeaderHeight.mobileXS};
  }

  @media only screen and (${ MobileS }) {
    padding-top: ${HeaderHeight.mobileS}
  }

  @media only screen and (${ MobileM }) {
    padding-top: ${HeaderHeight.mobileM}
  }

  @media only screen and (${ MobileL }) {
    padding-top: ${HeaderHeight.mobileL}
  }

  @media only screen and (${ PadS }) {
    padding-top: ${HeaderHeight.padS};
  }

  @media only screen and (${ Desktop }) {
    padding-top: ${HeaderHeight.desktop};
  }
`;
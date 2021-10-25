import styled from 'styled-components';
import { ScreenBreakPoint } from '../../../constants';
import { headerHeight } from '../Header';

const { Mobile, Desktop } = ScreenBreakPoint;

export const PageContainer = styled.div`
  @media only screen and (max-width: ${Mobile}px) {
    padding-top: ${headerHeight.underMobile}
  }

  @media only screen and (min-width: ${Mobile}px) {
    padding-top: ${headerHeight.overMobile};
  }

  @media only screen and (min-width: ${Desktop}px) {
    padding-top: ${headerHeight.overDesktop};
  }
`;
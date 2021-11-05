import React, { FC } from 'react';
import styled from 'styled-components';
import { color } from '../../../constants';

export const HomeContentsContainer: any = styled.div`
  background-color: ${({ white }: any) => white ? 'white' : color.gray_10 };
  background-color: ${({ transparent }: any) => transparent ? 'transparent' : null };
  padding: 0 3vw;
  position: ${({ absolute }: any) => absolute ? 'absolute' : 'relative' };
  z-index: ${({ zIndex }: any) => zIndex };
`;
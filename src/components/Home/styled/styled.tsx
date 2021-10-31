import React from 'react';
import styled from 'styled-components';
import { color } from '../../../constants';

export const HomeContentsContainer: any = styled.div`
  background-color: ${({ white }:any) => white ? 'white' : color.gray_10 };
  padding: 0 3vw;
`;
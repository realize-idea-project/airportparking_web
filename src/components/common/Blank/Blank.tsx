/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import styled from 'styled-components';
import { px } from '../../../utils';

interface Props {
  height?: number;
  width?: number;
}

export const Blank: FC<Props> = ({ height, width }) => {
  return <BlankDiv height={height} width={width} />;
};

const BlankDiv: any = styled.div`
  height: ${({ height }: any) => px(height)};
  width: ${({ width }: any) => px(width)};
`;

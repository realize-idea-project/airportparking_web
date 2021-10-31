/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import styled from 'styled-components';


interface Props {
  height?: number;
  width?: number;
  px?: boolean;
  maxHeight?: number;
  minHeight?: number;
  maxWidth?: number;
  minWidth?: number;
}

export const Blank: FC<Props> = ({ height, width, maxHeight, minHeight, maxWidth, minWidth, px = false }) => {

  return px
    ? <BlankPx height={height} width={width} maxHeight={maxHeight} minHeight={minHeight} maxWidth={maxWidth} minWidth={minWidth} />
    : <BlankVw height={height} width={width} maxHeight={maxHeight} minHeight={minHeight} maxWidth={maxWidth} minWidth={minWidth} />
};

const BlankVw: any = styled.div`
  height: ${({ height }: any) => `${height}vw`};
  width: ${({ width }: any) => `${width}vw`};

  max-height: ${({ maxHeight }: any) => `${maxHeight}px`};
  min-height: ${({ minHeight }: any) => `${minHeight}px`};

  max-width: ${({ maxWidth }: any) => `${maxWidth}px`};
  min-width: ${({ minWidth }: any) => `${minWidth}px`};
`;

const BlankPx: any = styled.div`
  height: ${({ height }: any) => `${height}px`};
  width: ${({ width }: any) => `${width}px`};

  max-height: ${({ maxHeight }: any) => `${maxHeight}px`};
  min-height: ${({ minHeight }: any) => `${minHeight}px`};

  max-width: ${({ maxWidth }: any) => `${maxWidth}px`};
  min-width: ${({ minWidth }: any) => `${minWidth}px`};
`;

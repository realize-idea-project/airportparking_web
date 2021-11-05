import React, { FC } from 'react';
import styled from 'styled-components';
import { color, images } from '../../../constants';

export const HomeContentsContainer: any = styled.div`
  background-color: ${({ white }: any) => white ? 'white' : color.gray_10 };
  background-color: ${({ transparent }: any) => transparent ? 'transparent' : null };
  padding: 0 3vw;
  position: ${({ absolute }: any) => absolute ? 'absolute' : 'relative' };
  z-index: ${({ zIndex }: any) => zIndex };
`;

export const HomeFacilityContainer: FC<any> = ({
  transparent,
  absolute,
  zIndex,
  children,
}) => {

  const BackgroundContainer = styled.div`
  position: relative;
  height: 50vw;
`;

  const BackgroundTextContainer = styled.div`
  width: 70vw;
  position: absolute;
  top: 15vw;
  right: 3vw;
  /* opacity: 0.8; */
`;

const BackgroundText = styled.img`
  width: 100%;
  height: 100%;
`;

  return (
    <BackgroundContainer>
      <BackgroundTextContainer>
        <BackgroundText src={images.meaninglessText} />
      </BackgroundTextContainer>
      <HomeContentsContainer
        transparent={transparent}
        absolute={absolute}
        zIndex={zIndex}
      >
        {children}
      </HomeContentsContainer>
    </BackgroundContainer>
  );
};
import React, { FC } from 'react';
import styled from 'styled-components';
import { images } from '../../../constants';

export const AbsoluteBackgroundText: FC = () => {
  return (
    <BackgroundTextContainer>
      <BackgroundText src={images.meaninglessText} />
    </BackgroundTextContainer>
  );
};

const BackgroundTextContainer = styled.div`
  width: 70vw;
  position: absolute;
  top: 15vw;
  right: 3vw;
`;

const BackgroundText = styled.img`
  width: 100%;
  height: 100%;
`;
import React, { FC } from 'react';
import styled from 'styled-components';
import { Blank } from '../../common';

interface Props {
  fieldName: string;
}

export const CustomerInfoInputField: FC<Props> = ({ fieldName, children }) => {
  return (
    <FieldContainer>
        <FieldTitleContainer>
          <Blank width={1} />
          <FieldTItle>{fieldName}</FieldTItle>
        </FieldTitleContainer>
        <Blank width={5} />
        <FieldInputContainer>
          {children}
        </FieldInputContainer>
      </FieldContainer>
  )
};

const FieldContainer = styled.div`
  border: 1px solid pink;
  display: flex;
  flex-direction: row;
  height: 5vw;
`;
const FieldTitleContainer = styled.div`
  flex: 2;
  border: 1px solid green;
  display: flex;
  align-items: center;
`;
const FieldTItle = styled.div``;

const FieldInputContainer = styled.div`
  flex: 6;
  border: 1px solid tomato;
  display: flex;
  align-items: center;
`;
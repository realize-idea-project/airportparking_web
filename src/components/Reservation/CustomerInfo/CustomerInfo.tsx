import React, { FC } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { dateFormat , ServiceDateKey } from '../../../business';
import { ChangeEvent } from '../../../types';
import { color } from '../../../constants';
import { getModifiedEvent } from '../../../utils';
import { Blank } from '../../common';

import { ymdhmList, getYmdhm } from '../ServiceUsePeriod/helpers';

export const CustomerInfo = () => {
  return (
    <Container>
       <Blank height={5} />
      <FieldContainer>
        <FieldTitleContainer>
          <FieldTItle>title</FieldTItle>
        </FieldTitleContainer>
        <Blank width={5} />
        <FieldInputContainer>
          <FieldInput>input</FieldInput>
        </FieldInputContainer>
      </FieldContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  
`;

const FieldContainer = styled.div`
  border: 1px solid pink;
  display: flex;
  flex-direction: row;
`;
const FieldTitleContainer = styled.div`
  flex: 2;
  border: 1px solid green;
`;
const FieldTItle = styled.div``;

const FieldInputContainer = styled.div`
  flex: 6;
  border: 1px solid tomato;
`;
const FieldInput = styled.div``;
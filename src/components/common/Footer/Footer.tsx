import React from 'react';
import styled from 'styled-components';
import { ScreenBreakPoint } from '../../../constants';
import { px } from '../../../utils'




export const Footer = () => {
  return (
    <Container>
      <LogoContainer />
      <CompanyInfoContaier>
        <CompanyTitle>rara</CompanyTitle>
        <CompanyAddress>rara</CompanyAddress>
      </CompanyInfoContaier>
      </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  
  
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  
`;

const CompanyInfoContaier = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: gray;

  

`;

const CompanyTitle = styled.div`

`;

const CompanyAddress = styled.div``;
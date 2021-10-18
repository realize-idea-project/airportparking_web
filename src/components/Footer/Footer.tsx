import React from 'react';
import styled from 'styled-components';
import { ScreenBreakPoint } from '../../constants';
import { px } from '../../utils'


const { Mobile, Desktop } = ScreenBreakPoint;

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
  
  @media only screen and (max-width: ${px(Mobile)}) {
    height: ${px(50)};
  }

  @media only screen and (min-width: ${px(Mobile)}) {
    height: ${px(80)};
  }

  @media only screen and (min-width: ${px(Desktop)}) {
    height: ${px(150)};
    min-width: ${px(1200)};
    width: 100vw;
    z-index: 10;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  @media only screen and (max-width: ${px(Mobile)}) {
    margin-left: ${px(10)};
    margin-right: ${px(20)};
  }

  @media only screen and (min-width: ${px(Mobile)}) {
    margin-left: ${px(20)};
    margin-right: ${px(20)};
  }

  @media only screen and (min-width: ${px(Desktop)}) {
    height: ${px(150)};
    margin-left: ${px(50)};
    margin-right: ${px(40)};
  }
`;

const CompanyInfoContaier = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: gray;

  @media only screen and (max-width: ${px(Mobile)}) {
    /* height: ${px(50)}; */
    font-size: ${px(12)};
  }

  @media only screen and (min-width: ${px(Mobile)}) {
    /* height: ${px(80)}; */
    font-size: ${px(16)};
  }

  @media only screen and (min-width: ${px(Desktop)}) {
    height: ${px(150)};
    min-width: ${px(1200)};
    width: 100vw;
    background-color: white;
    font-size: ${px(24)};
  }

`;

const CompanyTitle = styled.div`

`;

const CompanyAddress = styled.div``;
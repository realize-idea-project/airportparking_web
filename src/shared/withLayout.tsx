/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { ScreenBreakPoint } from '../constants';
import { px } from '../utils';
import { Header, Footer } from '../components';


const { Mobile, Desktop } = ScreenBreakPoint;

const withLayout = (Component: any) => {
  return (props: any) => {
    return (
      <Container>
        <Header />
        <ResponsiveContainer>
          <Component {...props} />
        </ResponsiveContainer>
        <Footer />
      </Container>
    );
  };
};

const Container = styled.div`
  position: relative;
  width: 100vw;
`;

const ResponsiveContainer = styled.div`
  @media only screen and (max-width: ${px(Mobile)}) {
    /* width: ${px(360)}; */
    margin: 0 auto;
  }

  @media only screen and (min-width: ${px(Mobile)}) {
    width: 100%;
  }

  @media only screen and (min-width: ${px(Desktop)}) {
    /* width: ${px(1200)}; */
    width: 100vw;
    margin: 0 auto;
  }
  
`;

export default withLayout;
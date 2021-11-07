/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import styled from 'styled-components';
import { Header, Footer } from '../components/common';

const withLayout = (Component: FC) => {
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

const ResponsiveContainer = styled.div``;

export default withLayout;

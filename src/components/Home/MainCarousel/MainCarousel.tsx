/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import { ContactCard } from './ContactCard';
import { px, percent } from '../../../utils';
import { ScreenBreakPoint } from '../../../constants';

interface Props {
  imagelist: string[];
}

const { Mobile } = ScreenBreakPoint;

export const MainCarousel: FC<Props> = ({ imagelist }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Container>
      <ContactCard />
      <CustomSlider {...settings} >
        {
          imagelist.map((path, index) => {
            return (
              <ImageContainer key={index.toString()}>
                <Image src={path} />
              </ImageContainer>
            );
          })
        }
      </CustomSlider>
    </Container>
  );
};

const Container = styled.div``;

const CustomSlider = styled(Slider)`
  width: 100vw;
  position: relative;
  

  .slick-list {
    height: 60vw;
  }

  .slick-prev {
    left: 0;
    /* z-index: 100; */
  }

  .slick-next {
    right: 0;
    z-index: -1;
  }

  .slick-dots {
    bottom: ${px(15)};
    z-index: 100;



    @media only screen and (max-width: ${px(Mobile)}) {
      bottom: ${px(20)};
    }
  }

  .slick-dots li button:before {
    font-size: ${px(10)};
    color: white;

    @media only screen and (max-width: ${px(Mobile)}) {
      font-size: ${px(7)};
    }
  }

`;

const ImageContainer = styled.div`
  max-height: 500px;
  
`;

const Image = styled.img`
  width: ${percent(100)};
  height: ${percent(100)};
  
`;


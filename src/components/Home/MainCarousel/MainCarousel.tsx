/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import { ContactCard } from './ContactCard';
import { ScreenBreakPoint } from '../../../constants';

interface Props {
  imagelist: string[];
}

const { MobileXS, MobileS, MobileM, MobileL, PadS, Desktop } = ScreenBreakPoint;

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
    <>
      <ContactCard />
      <CustomSlider {...settings} >
        {
          imagelist.map((path) => {
            return (
              <ImageContainer key={path}>
                <Image src={path} />
              </ImageContainer>
            );
          })
        }
      </CustomSlider>
    </>
  );
};


const CustomSlider = styled(Slider)`
  position: relative;

  .slick-list {
    height: 60vw;
  }

  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 0;
    z-index: -1;
  }

  .slick-dots {
    z-index: 1;

    @media only screen and (${ MobileXS }) {
      bottom: 6vw;
    }

    @media only screen and (${ MobileS }) {
      bottom: 7vw;
    }

    @media only screen and (${ MobileM }) {
      bottom: 9vw;
    }

    @media only screen and (${ MobileL }) {
      bottom: 7vw;
    }

    @media only screen and (${ PadS }) {
      bottom: 6.5vw;
    }

    @media only screen and (${ Desktop }) {
      bottom: 7.5vw;
    }
  }

  .slick-dots li button:before {
    color: white;
  
    @media only screen and (${ MobileXS }) {
      font-size: 3vw;
    }

    @media only screen and (${ MobileS }) {
      font-size: 3vw;
    }

    @media only screen and (${ MobileM }) {
      font-size: 2vw;
    }
  }

  .slick-dots li {
    color: white;
    width: 4vw;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;


"use client";
import { Carousel } from "react-responsive-carousel";
import carouselStyle from "./HomeCarousel.module.scss";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
// import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const HomeCarousel = (props: any) => {
  const customLoader = ({ src }) => {
    return src;
  };
  return (
    <>
      <Grid
        style={{
          height: props.carouselHeight,
          width: props.carouselWidth,
        }}
      >
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          dynamicHeight={false}
          transitionTime={600}
          autoPlay={true}
          interval={3000}
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <Grid container className={carouselStyle.arrow}>
                <Grid
                  className={carouselStyle.arrowPrev}
                  onClick={clickHandler}
                >
                  <ArrowBackOutlinedIcon className={carouselStyle.arrowWhite} />
                </Grid>
              </Grid>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <Grid container className={carouselStyle.arrow}>
                <Grid
                  className={carouselStyle.arrowNext}
                  onClick={clickHandler}
                >
                  <ArrowForwardOutlinedIcon
                    className={carouselStyle.arrowWhite}
                  />
                </Grid>
              </Grid>
            );
          }}
        >
          {props.carouselData &&
            props.carouselData.length > 0 &&
            props.carouselData.map((item) => {
              const image_urls = item.image_urls;
              const infiniteImageUrls = [];
              for (let i = 0; i < 3; i++) {
                const index = i % image_urls.length;
                infiniteImageUrls.push(image_urls[index]);
              }
              return infiniteImageUrls.map((image_urls, index) => (
                <Box className={carouselStyle.carouselBox} key={index}>
                  <Image
                    loader={customLoader}
                    width={500}
                    height={100}
                    src={image_urls}
                    alt={`carousel-image-${index}`}
                    layout="responsive"
                  ></Image>
                </Box>
              ));
            })}
        </Carousel>
      </Grid>
    </>
  );
};

export default HomeCarousel;

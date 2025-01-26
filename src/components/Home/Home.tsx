"use client";
import { Grid2, useMediaQuery } from "@mui/material";
import FooterComponent from "../FooterComponent/FooterComponent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import styles from "./Home.module.scss";
const HomeComponent = () => {
  const CAROUSEL_IMAGES = {
    items: [
      {
        image_urls: [
          "/images/Carousel Image.webp",
          "/images/Carousel Image 1.webp",
          "/images/Carousel Image 2.webp",
        ],
      },
    ],
  };
  const CAROUSEL_IMAGES_SMALL = {
    items: [
      {
        image_urls: [
          "/images/Carousel Image.webp",
          "/images/Carousel Image 1.webp",
          "/images/Carousel Image 2.webp",
        ],
      },
    ],
  };
  const smViewport = useMediaQuery("(max-width:768px)");

  return (
    <>
      <Grid2 container className={styles.home_carousel_container}>
        <HomeCarousel
          carouselWidth={"100%"}
          carouselData={
            smViewport ? CAROUSEL_IMAGES_SMALL.items : CAROUSEL_IMAGES.items
          }
        />
      </Grid2>

      <Grid2 style={{height:"100vh"}}></Grid2>
    </>
  );
};
export default HomeComponent;

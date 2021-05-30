import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SwiperComponent from "../../components/Swiper/Swiper";
import { DOMAINPATH } from "../../redux/ActionTypes";
import "./styles.scss";

const mainBanner = [
  {
    imgSrc:
      "https://ckssolutions.co.in/hardware/wp-content/uploads/2020/07/banner.jpg",
    href: `${DOMAINPATH}/category/electronics`,
    alt: "electronic-category",
  },
  {
    imgSrc:
      "https://dcassetcdn.com/design_img/2886222/654209/654209_15934433_2886222_90f467d9_image.jpg",
    href: `${DOMAINPATH}/category/jewelery`,
    alt: "jewelery-category",
  },
  {
    imgSrc:
      "https://www.designhill.com/design-blog/wp-content/uploads/2017/07/fashion-banner.jpg",
    href: `${DOMAINPATH}/category/men's%20clothing`,
    alt: "fashion-category",
  },
];

const HomePage = (props) => {
  useEffect(() => {
    document.title = "Welcome User";
  });
  const productCarouselOption = {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };

  return (
    <div className="home-page-wrapper">
      <div className="main-banner">
        <SwiperComponent
          autoPlay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          lazy={true}
          children={mainBanner}
        />
      </div>
    </div>
  );
};
export default HomePage;

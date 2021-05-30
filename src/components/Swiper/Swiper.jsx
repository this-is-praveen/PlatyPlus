import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/lazy/lazy.scss";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "./styles.scss";

// import Swiper core and required modules
import SwiperCore, {
  Lazy,
  EffectFade,
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/core";
import get from "get-value";

// install Swiper modules
SwiperCore.use([
  Autoplay,
  Navigation,
  EffectCoverflow,
  EffectFade,
  Lazy,
  Pagination,
]);

export default function SwiperComponent(props) {
  const swiperProps = get(props, "swiperProps", {});
  const children = get(props, "children", []);
  const isLoop = get(props, "loop", false);
  const isLazy = get(props, "lazy", false);
  console.log("children ", children);

  return (
    <React.Fragment>
      <Swiper
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        autoplay={get(props, "autoPlay", {})}
        navigation={get(props, "navigation", false)}
        loop={isLoop}
        lazy={isLazy}
        autoHeight={false}
        effect={get(props, "effect", "")}
        {...swiperProps}
      >
        {children?.map((data, index) => {
          const imageLink = get(data, "imgSrc", "");
          const dataSrc = {
            "data-src": imageLink,
          };
          const imgSrc = {
            src: imageLink,
          };
          if (imageLink) {
            return (
              <SwiperSlide key={`${get(data, "alt", "")}-${index}`}>
                <Link to={get(data, "href", "")}>
                  <Image
                    className={isLazy ? "swiper-lazy" : ""}
                    {...(isLazy ? { ...dataSrc } : { ...imgSrc })}
                  />
                </Link>
                {isLazy && (
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
                )}
              </SwiperSlide>
            );
          } else {
            return <React.Fragment />;
          }
        })}
      </Swiper>
    </React.Fragment>
  );
}

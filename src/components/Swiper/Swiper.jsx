import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "react-bootstrap";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/lazy/lazy.scss";
import "swiper/components/navigation/navigation.min.css";

import "./styles.scss";

// import Swiper core and required modules
import SwiperCore, { Lazy, EffectCoverflow, Pagination } from "swiper/core";
import get from "get-value";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Lazy, Pagination]);

export default function SwiperComponent(props) {
  const swiperProps = get(props, "swiperProps", {});
  const children = get(props, "children", []);
  return (
    <React.Fragment>
      <Swiper
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        {...swiperProps}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        lazy={true}
      >
        {children?.map((data, index) => {
          return (
            <SwiperSlide key="index">
              <Image data-src={data} className="swiper-lazy" alt={""} />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </React.Fragment>
  );
}

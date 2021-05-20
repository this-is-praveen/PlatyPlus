import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "react-bootstrap";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./styles.scss";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import get from "get-value";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

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
      >
        {children?.map((data, index) => {
          return (
            <SwiperSlide key="index">
              <Image src={data} />
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>
          <div style={{ height: "250px" }}>Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "250px" }}>Slide 4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "250px" }}>Slide 5</div>
        </SwiperSlide> */}
      </Swiper>
    </React.Fragment>
  );
}

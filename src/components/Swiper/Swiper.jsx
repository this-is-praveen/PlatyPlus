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
  EffectFade,
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/core";
import get from "get-value";
import LazyLoad from "react-lazyload";
import { ImageLoadingHolder } from "../../assets/svg";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, EffectCoverflow, EffectFade, Pagination]);

export default function SwiperComponent(props) {
  const swiperProps = get(props, "swiperProps", {});
  const lazyProps = get(props, "lazyProps", {});
  const children = get(props, "children", []);
  const isLoop = get(props, "loop", false);
  const isLazy = get(props, "lazy", false);
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
          if (imageLink) {
            return (
              <SwiperSlide key={`${get(data, "alt", "")}-${index}`}>
                <Link to={get(data, "href", "")}>
                  <LazyLoad
                    placeholder={
                      <ImageLoadingHolder
                        className={"swiper-lazy-place-holder"}
                      />
                    }
                    offset={[-200, 0]}
                    debounce={500}
                    height={"250px"}
                  >
                    <Image className={"swiper-img"} src={imageLink} />
                  </LazyLoad>
                </Link>
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

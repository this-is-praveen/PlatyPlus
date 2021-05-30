import get from "get-value";
import React from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import useFetch from "use-http";
import { API_END_POINT } from "../../redux/ActionTypes";
import ReactImageZoom from "react-image-zoom";
import "./productLeftStyles.scss";
import { ImageLoadingHolder } from "../../assets/svg";

export const ProductLeftPart = (props) => {
  const productResponse = get(props, "productResponse", {});
  const fallBackImage = `https://placeholder.pics/svg/400/000000-2DFFA5/FFFFFF-FFFFFF/${encodeURIComponent(
    "Sorry Image not Available"
  )}`;
  const imageProps = {
    zoomWidth: 400,
    width: 400,
    img: get(productResponse, "image", fallBackImage),
    zoomPosition: "original",
    offset: { vertical: 0, horizontal: 10 },
  };
  return (
    <React.Fragment>
      <div className="pdp-image-wrapper">
        {get(productResponse, "image", "") && (
          <LazyLoad
            placeholder={
              <ImageLoadingHolder className={"product-image-loader"} />
            }
            debounce={400}
            height={"400px"}
            once={true}
          >
            <Image
              src={get(productResponse, "image", "")}
              alt={get(productResponse, "title", "")}
            />
          </LazyLoad>
        )}
      </div>
    </React.Fragment>
  );
};

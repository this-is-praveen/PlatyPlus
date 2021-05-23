import get from "get-value";
import React from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import useFetch from "use-http";
import { API_END_POINT } from "../../redux/ActionTypes";
import ReactImageMagnify from "react-image-magnify";
import "./styles.scss";

export const ProductLeftPart = (props) => {
  const productResponse = get(props, "productResponse", {});

  console.log("productResponse ", props);
  return (
    <React.Fragment>
      <LazyLoad height={200} once>
        <ReactImageMagnify
          {...{
            smallImage: {
              src: get(productResponse, "image", ""),
              isFluidWidth: true,
            },
            largeImage: {
              src: get(productResponse, "image", ""),
              height: 400,
              width: 100,
            },
          }}
        />
      </LazyLoad>
    </React.Fragment>
  );
};

import get from "get-value";
import React, { useRef, useState } from "react";
import { Image, Card, CardDeck } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import { ImageLoadingHolder } from "../../assets/svg";
import { DOMAINPATH } from "../../redux/ActionTypes";
import "./styles.scss";

const ProductInfo = (props) => {
  const {
    id,
    image: imageSrc = "",
    title = "",
    description = "",
    price = "",
  } = get(props, "data", {});
  return (
    <Card className="text-center">
      <Link to={`${DOMAINPATH}/product/${id}`}>
        <Card.Header>
          <LazyLoad
            placeholder={
              <ImageLoadingHolder className={"product-image-loader"} />
            }
            debounce={400}
            height={"250px"}
          >
            <Image src={imageSrc} alt={title} />
          </LazyLoad>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <p className="product-desc">{description}</p>
          </Card.Subtitle>
        </Card.Body>
        <Card.Footer className="text-muted">{`Price $${price}`}</Card.Footer>
      </Link>
    </Card>
  );
};

export default ProductInfo;

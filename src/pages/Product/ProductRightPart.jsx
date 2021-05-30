import get from "get-value";
import React from "react";
import { useRef } from "react";
import { Col, Row, Container } from "react-bootstrap";
import useFetch from "use-http";
import { CartIcon } from "../../assets/svg";
import { API_END_POINT } from "../../redux/ActionTypes";
import "./productRightStyles.scss";

export const ProductRightPart = (props) => {
  const productResponse = get(props, "productResponse", {});
  const loading = get(props, "loading", false);
  const addToCartButtonClick = () => {
    const addToCartDom = document.querySelector(".add-to-cart-button");
    if (addToCartDom) {
      addToCartDom.classList.add("added");
      setTimeout(function () {
        addToCartDom.classList.remove("added");
      }, 2000);
    }
  };
  const renderPrice = () => {
    const salePrice = get(productResponse, "price", 0);
    const originalPrice = (salePrice + 0.3 * salePrice).toFixed(2); // Bumping price by 30%
    return (
      <div className="pdp-price-wrapper">
        <div className="pdp-sale-price">{"$" + salePrice}</div>
        <div className="pdp-original-price strikethrough">
          {"$" + originalPrice}
        </div>
      </div>
    );
  };

  return (
    <div className="pdp-right">
      <div className="pdp-title">{get(productResponse, "title", "")}</div>
      <div className="pdp-price">{renderPrice()}</div>
      <div className="pdp-desc">{get(productResponse, "description", "")}</div>
      {!loading && (
        <button
          onClick={() => addToCartButtonClick()}
          className="add-to-cart-button"
        >
          <CartIcon />
          <span className="add-to-cart">Add to cart</span>
          <span className="added-to-cart">Added to cart</span>
        </button>
      )}
    </div>
  );
};

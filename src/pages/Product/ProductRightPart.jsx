import get from "get-value";
import React from "react";
import { useRef } from "react";
import { Col, Row, Container } from "react-bootstrap";
import useFetch from "use-http";
import { CartIcon } from "../../assets/svg";
import { API_END_POINT } from "../../redux/ActionTypes";
import "./styles.scss";

export const ProductRightPart = (props) => {
  const addToCartRef = useRef();
  const productResponse = get(props, "productResponse", {});
  const addToCartButtonClick = () => {
    if (addToCartRef) {
      addToCartRef.current.classList.add("added");
      setTimeout(function () {
        addToCartRef.current.classList.remove("added");
      }, 2000);
    }
  };
  return (
    <div>
      <button
        ref={addToCartRef}
        class="add-to-cart-button"
        onClick={addToCartButtonClick}
      >
        <CartIcon />
        <span class="add-to-cart">Add to cart</span>
        <span class="added-to-cart">Added to cart</span>
      </button>
    </div>
  );
};

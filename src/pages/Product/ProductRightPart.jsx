import get from "get-value";
import React from "react";
import { connect } from "react-redux";
import { CartIcon } from "../../assets/svg";
import reduxStore from "../../redux/store";
import { AddCart } from "../../redux/Actions";
import "./productRightStyles.scss";
import "./styles.scss";

const store = get(reduxStore, "store", {});

const ProductRightPart = (props) => {
  const productResponse = get(props, "productResponse", {});
  const loading = get(props, "loading", false);

  const addToCartButtonClick = (item = {}) => {
    const addToCartDom = document.querySelector(".add-to-cart-button");
    if (addToCartDom) {
      addToCartDom.classList.add("added");
      setTimeout(function () {
        addToCartDom.classList.remove("added");
      }, 2000);
    }
    const addToCart = get(props, "AddCart", () => {});
    console.log("store b4 ", store.getState());
    addToCart(get(item, "productResponse", {}));
    console.log("store after ", store.getState());
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
          onClick={() => addToCartButtonClick({ productResponse })}
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

function mapStateToProps(state) {
  return {
    userDetails: state?.userDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    AddCart: (item) => dispatch(AddCart(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductRightPart);

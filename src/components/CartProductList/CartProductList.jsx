import get from "get-value";
import React from "react";
import {
  Button,
  Col,
  Container,
  Row,
  FormControl,
  Image,
} from "react-bootstrap";
import LazyLoad from "react-lazyload";
import { connect } from "react-redux";
import {
  DecreaseQuantity,
  DeleteCart,
  IncreaseQuantity,
} from "../../redux/Actions";
import { ImageLoadingHolder } from "../../assets/svg";

const QuantityBox = (props) => {
  const quantityValue = get(props, "quantity", 1);
  const cartItem = get(props, "item", 1);
  const increaseProductQty = get(props, "IncreaseQuantity", () => {});
  const decreaseProductQty = get(props, "DecreaseQuantity", () => {});
  return (
    <div className="quantity-input d-flex">
      <Button
        className="quantity-input-sign quantity-input-left"
        onClick={() => decreaseProductQty(cartItem)}
        disabled={quantityValue === 1}
        variant="outline-dark"
      >
        {"-"}
      </Button>
      <FormControl
        className="quantity-input-box"
        type={"text"}
        value={quantityValue}
        readOnly
      />
      <Button
        className="quantity-input-sign quantity-input-right"
        onClick={() => increaseProductQty(cartItem)}
        disabled={quantityValue === 10}
        variant="outline-dark"
      >
        {"+"}
      </Button>
    </div>
  );
};

const CartProductList = (props) => {
  const showTitle = get(props, "showTitle", true);
  const showImage = get(props, "showImage", true);
  const showCartIndex = get(props, "showCartIndex", true);
  const isCheckOut = get(props, "fromCheckOut", true);
  const columnWidth = get(props, "columnWidth", {});
  const cartProducts = get(props, "cartProduct", []);
  const deleteProductFromCart = get(props, "DeleteCart", () => {});
  const cartTotal = cartProducts
    .map((data) => {
      const qty = get(data, "quantity", 0);
      const unitPrice = get(data, "price", 0);
      const totalPrice = qty * unitPrice;
      const priceFormat = totalPrice?.toFixed(2);
      return Number(priceFormat);
    })
    .reduce((acc, price) => {
      const initialPrice = Number(acc);
      const modifiedPrice = initialPrice + price;
      const priceFormat = modifiedPrice?.toFixed(2);
      return Number(priceFormat);
    });

  return (
    <Container>
      {showTitle && (
        <Row>
          <Col md={get(columnWidth, "index", 0)}>S.No</Col>
          <Col md={get(columnWidth, "name", 0)}>Name</Col>
          <Col className="text-center" md={get(columnWidth, "quantity", 0)}>
            Quantity
          </Col>
          <Col md={get(columnWidth, "price1", 0)}>Unit Price</Col>
          <Col md={get(columnWidth, "price2", 0)}>Product Total</Col>
        </Row>
      )}
      <div className="divider" />
      {cartProducts.map((data, index) => {
        const productUnitPrice = get(data, "price", 0).toFixed(2);
        const productTotalPrice = (
          get(data, "quantity", 0) * productUnitPrice
        ).toFixed(2);
        return (
          <Row
            key={`cart-item-${index}`}
            className={"cart-item align-items-center mb-3"}
          >
            {showCartIndex && (
              <Col
                className={"cart-item-field"}
                md={get(columnWidth, "index", 0)}
              >
                {index + 1}
              </Col>
            )}
            {showImage && (
              <Col
                className={"cart-item-field"}
                md={get(columnWidth, "image", 0)}
              >
                <LazyLoad
                  placeholder={
                    <ImageLoadingHolder className={"product-image-loader"} />
                  }
                  debounce={400}
                  height={"400px"}
                  once={true}
                >
                  <Image
                    src={get(data, "image", "")}
                    alt={get(data, "title", "")}
                  />
                </LazyLoad>
              </Col>
            )}
            <Col className={"cart-item-field"} md={get(columnWidth, "name", 0)}>
              {get(data, "name", "")}
            </Col>
            <Col
              className={"cart-item-field"}
              md={get(columnWidth, "quantity", 0)}
            >
              <QuantityBox
                item={data}
                quantity={get(data, "quantity", 0)}
                {...props}
              />
            </Col>
            <Col
              className={"cart-item-field"}
              md={get(columnWidth, "price1", 0)}
            >
              <React.Fragment>
                <span className={"mr-1"}>{"$"}</span>
                {productUnitPrice}
              </React.Fragment>
            </Col>
            <Col
              className={"cart-item-field"}
              md={get(columnWidth, "price2", 0) / 2}
            >
              <React.Fragment>
                <span className={"mr-1"}>{"$"}</span>
                {productTotalPrice}
              </React.Fragment>
            </Col>
            <Col
              className={"cart-item-field"}
              md={get(columnWidth, "price2", 0) / 2}
            >
              <React.Fragment>
                <Button
                  variant={"dark"}
                  onClick={() => deleteProductFromCart(data)}
                >
                  Remove
                </Button>
              </React.Fragment>
            </Col>
          </Row>
        );
      })}
      <div className="divider" />
      <Row className={`cart-total${isCheckOut ? " justify-content-end" : ""}`}>
        <Col md={isCheckOut ? 2 : 1}>Total Price</Col>
        <Col className="cart-total-value" md={2}>
          <React.Fragment>
            <span className={"mr-1"}>{"$"}</span>
            {cartTotal}
          </React.Fragment>
        </Col>
      </Row>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    cartProduct: state?.Carts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    IncreaseQuantity: (item) => dispatch(IncreaseQuantity(item)),
    DecreaseQuantity: (item) => dispatch(DecreaseQuantity(item)),
    DeleteCart: (item) => dispatch(DeleteCart(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartProductList);

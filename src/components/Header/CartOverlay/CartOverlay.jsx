import get from "get-value";
import { isEmpty } from "lodash";
import React from "react";
import {
  Button,
  Form,
  FormControl,
  Image,
  Row,
  Col,
  Modal,
  Container,
} from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import reduxStore from "../../../redux/store";
import "./styles.scss";
import { CartIcon } from "../../../assets/svg";
import { DeleteCart, IncreaseQuantity } from "../../../redux/Actions";
import { DecreaseQuantity } from "../../../redux/Actions";
import { DOMAINPATH } from "../../../redux/ActionTypes";

const store = get(reduxStore, "store", {});

const QuantityBox = (props) => {
  const quantityValue = get(props, "quantity", 1);
  const cartItem = get(props, "item", 1);
  const increaseProductQty = get(props, "IncreaseQuantity", () => {});
  const decreaseProductQty = get(props, "DecreaseQuantity", () => {});
  return (
    <div className="quantity-input">
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

const CartBody = (props) => {
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
    <Modal.Body className="cart-body">
      <Container>
        <Row>
          <Col md={1}>S.No</Col>
          <Col md={4}>Name</Col>
          <Col className="text-center" md={3}>
            Quantity
          </Col>
          <Col md={2}>Unit Price</Col>
          <Col md={2}>Product Total</Col>
        </Row>
        <div className="divider" />
        {cartProducts.map((data, index) => {
          const productUnitPrice = get(data, "price", 0).toFixed(2);
          const productTotalPrice = (
            get(data, "quantity", 0) * productUnitPrice
          ).toFixed(2);
          return (
            <Row key={`cart-item-${index}`} className={"cart-item mb-3"}>
              <Col className={"cart-item-field"} md={1}>
                {index + 1}
              </Col>
              <Col className={"cart-item-field"} md={4}>
                {get(data, "name", "")}
              </Col>
              <Col className={"cart-item-field"} md={3}>
                <QuantityBox
                  item={data}
                  quantity={get(data, "quantity", 0)}
                  {...props}
                />
              </Col>
              <Col className={"cart-item-field"} md={2}>
                <React.Fragment>
                  <span className={"mr-1"}>{"$"}</span>
                  {productUnitPrice}
                </React.Fragment>
              </Col>
              <Col className={"cart-item-field"} md={1}>
                <React.Fragment>
                  <span className={"mr-1"}>{"$"}</span>
                  {productTotalPrice}
                </React.Fragment>
              </Col>
              <Col className={"cart-item-field"} md={1}>
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
        <Row className="cart-total">
          <Col md={1}>Total Price</Col>
          <Col className="cart-total-value" md={2}>
            <React.Fragment>
              <span className={"mr-1"}>{"$"}</span>
              {cartTotal}
            </React.Fragment>
          </Col>
        </Row>
      </Container>
    </Modal.Body>
  );
};

const EmptyCartBody = (props) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Image src={process.env.PUBLIC_URL + "/images/empty-cart.png"} />
      <h3 className="mb-3">No Products Available in Cart</h3>
    </div>
  );
};

const CartOverlay = (props) => {
  const [toShowCart, setToShowCart] = React.useState(false);
  const handleCartClose = () => setToShowCart(false);
  const handleCartShow = () => setToShowCart(true);
  const cartCount = get(props, "cartCount", 0);
  const moveToCheckOut = () => {
    console.log("props ", props);
  };
  console.log("im in");
  return (
    <React.Fragment>
      <div onClick={handleCartShow} className="cart-icon-wrapper d-flex">
        <CartIcon disableOtherIcon={true} />
        <div className="cart-count">{cartCount}</div>
      </div>
      <Modal
        backdrop="static"
        keyboard={false}
        variant={"dark"}
        show={toShowCart}
        onHide={handleCartClose}
        dialogClassName={"shopping-cart-modal"}
        aria-labelledby="cart-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Shopping Bag</Modal.Title>
        </Modal.Header>
        {cartCount ? <CartBody {...props} /> : <EmptyCartBody />}
        <Modal.Footer>
          <Button
            type="button"
            variant="dark"
            as={Link}
            to={`${DOMAINPATH}/checkout`}
            disabled={!cartCount}
          >
            CHECKOUT
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    userDetails: state?.userDetails,
    cartCount: state?.numberCart,
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

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);

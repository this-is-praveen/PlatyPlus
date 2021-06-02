import get from "get-value";
import { isEmpty } from "lodash";
import React from "react";
import {
  Button,
  Form,
  FormControl,
  Navbar,
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

const store = get(reduxStore, "store", {});

const QuantityBox = (props) => {
  const quantityValue = get(props, "quantity", 1);
  return (
    <div className="quantity-input">
      <button
        className="quantity-input__modifier quantity-input__modifier--left"
        onClick={{}}
      >
        {"-"}
      </button>
      <input
        className="quantity-input__screen"
        type="text"
        value={quantityValue}
        readonly
      />
      <button
        className="quantity-input__modifier quantity-input__modifier--right"
        onClick={{}}
      >
        {"+"}
      </button>
    </div>
  );
};

const CartBody = (props) => {
  const cartProducts = get(props, "cartProduct", []);
  return (
    <Modal.Body className="cart-body">
      <Container>
        <Row>
          <Col md={1}>S.No</Col>
          <Col md={4}>Name</Col>
          <Col md={3}>QTY</Col>
          <Col md={2}>Unit Price</Col>
          <Col md={2}>Total Price</Col>
        </Row>
        <div className="divider" />
        {cartProducts.map((data, index) => {
          return (
            <Row className={"cart-item mb-3"}>
              <Col md={1}>{index + 1}</Col>
              <Col md={4}>{get(data, "name", "")}</Col>
              <Col md={3}>
                <QuantityBox quantity={get(data, "quantity", 0)} />
              </Col>
              <Col md={2}>
                <React.Fragment>
                  <span className={"mr-1"}>{"$"}</span>
                  {get(data, "price", 0)}
                </React.Fragment>
              </Col>
              <Col md={2}>
                <React.Fragment>
                  <span className={"mr-1"}>{"$"}</span>
                  {get(data, "quantity", 0) * get(data, "price", 0)}
                </React.Fragment>
              </Col>
            </Row>
          );
        })}
      </Container>
    </Modal.Body>
  );
};

const CartOverlay = (props) => {
  const [toShowCart, setToShowCart] = React.useState(false);
  const handleCartClose = () => setToShowCart(false);
  const handleCartShow = () => setToShowCart(true);
  const cartCount = get(props, "cartCount", 0);
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
        <CartBody {...props} />
        <Modal.Footer>
          <button type="button" className="btn btn-default" disabled>
            CHECKOUT
          </button>
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

export default connect(mapStateToProps)(CartOverlay);

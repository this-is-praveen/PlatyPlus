import get from "get-value";
import React from "react";
import { Button, Image, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CartIcon } from "../../../assets/svg";
import {
  DecreaseQuantity,
  DeleteCart,
  IncreaseQuantity,
} from "../../../redux/Actions";
import { DOMAINPATH } from "../../../redux/ActionTypes";
import reduxStore from "../../../redux/store";
import CartProductList from "../../CartProductList/CartProductList";
import "./styles.scss";

const store = get(reduxStore, "store", {});

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
  const cartBodyProps = {
    showImage: false,
    columnWidth: {
      index: 1,
      image: 0,
      name: 4,
      quantity: 3,
      price1: 2,
      price2: 2,
    },
  };
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
        <Modal.Body className="cart-body">
          {cartCount ? (
            <CartProductList {...cartBodyProps} {...props} />
          ) : (
            <EmptyCartBody />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="button"
            variant="dark"
            as={Link}
            to={`${DOMAINPATH}/checkout`}
            onClick={() => setToShowCart(false)}
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

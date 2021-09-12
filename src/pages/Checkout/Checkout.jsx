import React, { Component } from "react";
import AddressForm from "../../components/AddressForm";
import PaymentSection from "../../components/Payment/PaymentSection";
import CartProductList from "../../components/CartProductList/CartProductList";
import { SwitchTransition, CSSTransition } from "react-transition-group"; // ES6

import {
  Button,
  Col,
  Container,
  Row,
  FormControl,
  Image,
} from "react-bootstrap";
import "./styles.scss";

const Checkout = (props = {}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [addressData, setAddressData] = React.useState({});
  const reviewItemProps = {
    showTitle: false,
    showCartIndex: false,
    showImage: false,
    fromCheckOut: true,
  };
  const onAddressSubmit = (data = {}) => {
    setAddressData(data);
    setActiveIndex(1);
  };

  const renderCheckOutSection = (index) => {
    switch (index) {
      case 1:
        return (
          <div className="review-items">
            <h1 className="my-3">Review Your Items</h1>
            <CartProductList {...reviewItemProps} {...props} />
            <div>
              <Button onClick={() => setActiveIndex(0)}>Go Back</Button>
              <Button onClick={() => setActiveIndex(2)}>
                Continue to Payment
              </Button>
            </div>
          </div>
        );
      case 2:
        return <PaymentSection />;

      default:
        return (
          <div className={"checkout-address-wrapper"}>
            <AddressForm
              prefillData={addressData}
              onAddressSubmit={onAddressSubmit}
              {...props}
            />
          </div>
        );
    }
  };

  return (
    <div className={"checkout-wrapper"}>
      <SwitchTransition
        transitionName="section"
        mode="out-in"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <CSSTransition
          key={activeIndex}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames="section"
        >
          {renderCheckOutSection(activeIndex)}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};
export default Checkout;

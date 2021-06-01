import get from "get-value";
import { isEmpty } from "lodash";
import React from "react";
import { Button, Form, FormControl, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import reduxStore from "../../redux/store";
import { setToastMessage, useDate } from "../../utils/utils";
import { CategoryNavBar } from "./CategoryNavBar";
import { CartIcon } from "../../assets/svg";
import "./styles.scss";

const store = get(reduxStore, "store", {});
const Header = (props) => {
  const [headerHeight, setHeaderHeight] = React.useState(0);
  React.useEffect(() => {
    const headerHeightNew =
      document.querySelector(".header-nav-bar").offsetHeight;
    if (headerHeight !== headerHeightNew) {
      setHeaderHeight(headerHeightNew);
    }
  });
  const cartCount = store.getState().numberCart || 0;
  const userDetails = get(props, "userDetails", {});
  const wish = useDate().wish;
  return (
    <header style={{ height: `${headerHeight}px` }}>
      <Navbar
        fixed="top"
        className="header-nav-bar bg-black"
        variant="dark"
        expand="lg"
      >
        <Link to="/PlatyPlus">
          <Navbar.Brand className="glow">PlatyPlus</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-space-between" id="navbarScroll">
          <CategoryNavBar />
          {isEmpty(userDetails) ? (
            <Link to="/PlatyPlus/login">
              <Navbar.Brand>Login</Navbar.Brand>
            </Link>
          ) : (
            <React.Fragment>
              <p className="my-auto mr-2" style={{ color: "white" }}>
                {wish + " Praveen"}
              </p>
              <Button
                className="mr-2"
                variant="outline-light"
                onClick={() => {
                  store.dispatch({ type: "LOGOUT" });
                  setToastMessage({
                    status: "success",
                    message: "User Signed Out",
                  });
                }}
              >
                Logout
              </Button>
            </React.Fragment>
          )}
          <div className="cart-icon-wrapper d-flex">
            <CartIcon disableOtherIcon={true} />
            <div className="cart-count">{cartCount}</div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

function mapStateToProps(state) {
  return {
    userDetails: state?.userDetails,
  };
}

export default connect(mapStateToProps)(Header);

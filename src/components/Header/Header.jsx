import get from "get-value";
import { isEmpty } from "lodash";
import React from "react";
import { Button, Form, FormControl, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import reduxStore from "../../redux/store";
import { setToastMessage, useDate } from "../../utils/utils";
import { CategoryNavBar } from "./CategoryNavBar";
import "./styles.scss";

const store = get(reduxStore, "store", {});

const Header = (props) => {
  const userDetails = get(props, "userDetails", {});
  const wish = useDate().wish;
  return (
    <header>
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
        <Link to="/PlatyPlus">
          <Navbar.Brand>PlatyPlus</Navbar.Brand>
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
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
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

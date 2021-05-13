import React from "react";
import {
  Button,
  NavDropdown,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useDate } from "../../utils/utils";
import "./styles.scss";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Link to="/PlatyPlus">
          <Navbar.Brand>PlatyPlus</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-space-between" id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action2"></Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <Link className="dropdown-item" to="/PlatyPlus/product/test">
                Category #1
              </Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Category #2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Category #3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <p className="my-auto mr-4" style={{ color: "white" }}>
            {useDate().wish + " Praveen"}
          </p>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default Header;

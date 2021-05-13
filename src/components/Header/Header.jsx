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
import "./styles.scss";
const Header = () => {
  return (
    <header>
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>PlatyPlus</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-space-between" id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action2"></Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Category #1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Category #2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Category #3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
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

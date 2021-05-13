import React from "react";
import {
  Button,
  NavDropdown,
  Form,
  FormControl,
  Nav,
  Container,
  Navbar,
  Row,
  Col,
} from "react-bootstrap";
import "./styles.scss";
import { LinkContainer } from "react-router-bootstrap";
import { useDate } from "../../utils/utils";

export const Footer = () => {
  return (
    <footer class="main-footer bg-dark">
      <Container>
        <Navbar variant="dark">
          <Nav className="w-100">
            <Row className="d-flex w-100 text-center">
              <Col>
                <Nav.Link>{useDate().date + " " + useDate().time}</Nav.Link>
              </Col>
              <Col>
                <ul class="list-inline social-buttons">
                  <li class="list-inline-item">
                    <LinkContainer to="#">
                      <Nav.Link>
                        <i class="fab fa-twitter"></i>
                      </Nav.Link>
                    </LinkContainer>
                  </li>
                  <li class="list-inline-item">
                    <LinkContainer to="#">
                      <Nav.Link>
                        <i class="fab fa-facebook-f"></i>{" "}
                      </Nav.Link>
                    </LinkContainer>
                  </li>
                  <li class="list-inline-item">
                    <LinkContainer to="#">
                      <Nav.Link>
                        <i class="fab fa-linkedin-in"></i>{" "}
                      </Nav.Link>
                    </LinkContainer>
                  </li>
                </ul>{" "}
              </Col>
            </Row>
          </Nav>
        </Navbar>
      </Container>
    </footer>
  );
};

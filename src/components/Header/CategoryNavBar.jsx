import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { DOMAINPATH } from "../../redux/ActionTypes";
import { GetCategory } from "./GetCategory";
import "./styles.scss";

export const CategoryNavBar = () => {
  const categoryList = GetCategory();
  return (
    <Nav className="category-dropdown mr-auto my-2 my-lg-0" navbarScroll>
      <NavDropdown title="Category" id={"category-dropdown-title"}>
        {categoryList?.map((data, index) => {
          return (
            <LinkContainer
              key={data + index}
              to={`${DOMAINPATH}/category/${encodeURIComponent(data)}`}
            >
              <Nav.Link className="px-3 text-capitalize">{data}</Nav.Link>
            </LinkContainer>
          );
        })}
      </NavDropdown>
    </Nav>
  );
};

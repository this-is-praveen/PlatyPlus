import get from "get-value";
import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import useFetch from "use-http";
import { API_END_POINT, DOMAINPATH } from "../../redux/ActionTypes";
import "./styles.scss";

export const CategoryNavBar = () => {
  const [categoryList, setCategoryList] = React.useState([]);
  const { get: getResponse, response, error } = useFetch(API_END_POINT);

  React.useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
    const categoryListResponse = await getResponse("/products/categories");
    if (response.ok) {
      setCategoryList(categoryListResponse);
    }
  };

  return (
    <Nav className="category-dropdown mr-auto my-2 my-lg-0" navbarScroll>
      <NavDropdown title="Category" id={"category-dropdown-title"}>
        {error ? (
          <div>Error : {error}</div>
        ) : (
          categoryList?.map((data, index) => {
            return (
              <LinkContainer
                key={data + index}
                to={`${DOMAINPATH}/category/${encodeURIComponent(data)}`}
              >
                <Nav.Link className="px-3 text-capitalize">{data}</Nav.Link>
              </LinkContainer>
            );
          })
        )}
      </NavDropdown>
    </Nav>
  );
};

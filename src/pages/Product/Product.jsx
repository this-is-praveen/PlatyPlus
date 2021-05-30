import get from "get-value";
import React from "react";
import { Col, Row, Container, Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import useFetch from "use-http";
import { LoadingSpinner } from "../../assets/svg";
import { API_END_POINT, DOMAINPATH } from "../../redux/ActionTypes";
import { ProductLeftPart } from "./ProductLeftPart";
import { ProductRightPart } from "./ProductRightPart";
import "./styles.scss";

const Product = (props) => {
  const { get: getResponse, response, loading } = useFetch(API_END_POINT);
  const [productResponse, setProductResponse] = React.useState([]);
  const productId = decodeURIComponent(
    get(props, "match.params.productId", "")
  );

  React.useEffect(() => {
    getProductResponse();
  }, [productId]);

  const getProductResponse = async () => {
    const productResponse = await getResponse(`/products/${productId}`);
    if (response.ok) {
      setProductResponse(productResponse);
    }
  };

  const propsToPass = {
    productResponse,
    ...props,
  };
  const renderBreadCrumb = () => {
    const categoryName = get(productResponse, "category", "");
    return (
      <Breadcrumb>
        <LinkContainer to={`${DOMAINPATH}`}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </LinkContainer>
        <LinkContainer
          to={`${DOMAINPATH}/category/${encodeURIComponent(categoryName)}`}
        >
          <Breadcrumb.Item>{categoryName}</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active>
          {get(productResponse, "title", "")}
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  };
  console.log("loading ", loading);

  return (
    <Container className="pdp-container my-5">
      {loading ? (
        <LoadingSpinner className="pdp-loading-spinner d-flex justify-content-center" />
      ) : (
        <React.Fragment>
          <Row>{renderBreadCrumb()}</Row>
          <Row>
            <Col lg={6} md={6} sm={12} className="pdp-left">
              {ProductLeftPart(propsToPass)}
            </Col>
            <Col lg={6} md={6} sm={12} className="pdp-left">
              {ProductRightPart(propsToPass)}
            </Col>
          </Row>
        </React.Fragment>
      )}
    </Container>
  );
};

export default Product;

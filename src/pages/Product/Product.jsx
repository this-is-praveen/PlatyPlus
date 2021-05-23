import get from "get-value";
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import useFetch from "use-http";
import { API_END_POINT } from "../../redux/ActionTypes";
import { ProductLeftPart } from "./ProductLeftPart";
import { ProductRightPart } from "./ProductRightPart";
import "./styles.scss";

const Product = (props) => {
  const [productResponse, setProductResponse] = React.useState([]);
  const { get: getResponse, response, loading } = useFetch(API_END_POINT);
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
    loading,
    ...props,
  };

  return (
    <Container className="pdp-container my-5">
      <Row>
        <Col className="pdp-left">{ProductLeftPart(propsToPass)}</Col>
        <Col className="pdp-left">{ProductRightPart(propsToPass)}</Col>
      </Row>
    </Container>
  );
};
export default Product;

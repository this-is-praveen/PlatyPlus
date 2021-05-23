import get from "get-value";
import React from "react";
import { Accordion, Card, CardDeck, Col, Row } from "react-bootstrap";
import useFetch from "use-http";
import { LoadingSpinner } from "../../assets/svg";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import { API_END_POINT } from "../../redux/ActionTypes";
import "./styles.scss";

const Category = (props) => {
  const [categoryResponse, setCategoryResponse] = React.useState([]);
  const { get: getResponse, response, loading } = useFetch(API_END_POINT);
  const categoryId = decodeURIComponent(
    get(props, "match.params.categoryName", "")
  );
  React.useEffect(() => {
    getCategoryResponse();
    console.log("categoryId ", categoryId);
  }, [categoryId]);

  const getCategoryResponse = async () => {
    const categoryResponse = await getResponse(
      `/products/category/${categoryId}`
    );
    if (response.ok) {
      setCategoryResponse(categoryResponse);
    }
  };
  return (
    <div className="catalog-container">
      {loading ? (
        <LoadingSpinner className="catalog-loading-spinner d-flex justify-content-center" />
      ) : (
        <Row className="mw-100 my-5">
          <Col>
            <Accordion defaultActiveKey="0" style={{ color: "white" }}>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Category
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p className="glow ">Hello! I'm the body</p>
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
          </Col>
          <Col style={{ flexGrow: 5 }}>
            <CardDeck className="plp-wrapper">
              {categoryResponse.map((data) => {
                return <ProductInfo data={data} />;
              })}
            </CardDeck>
          </Col>
        </Row>
      )}
    </div>
  );
};
export default Category;

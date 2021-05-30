import get from "get-value";
import React, { useContext } from "react";
import { Accordion, Card, CardDeck, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFetch from "use-http";
import { LoadingSpinner } from "../../assets/svg";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import { API_END_POINT, DOMAINPATH } from "../../redux/ActionTypes";
import ContextData from "../../routes/context/Context";
import "./styles.scss";

const PLP = (props) => {
  const context = useContext(ContextData);
  const [categoryResponse, setCategoryResponse] = React.useState([]);
  const getContextData = get(context, "contextObj", {});
  const { get: getResponse, response, loading } = useFetch(API_END_POINT);
  const categoryListFromContext = get(getContextData, "categoryList", []);
  const categoryId = decodeURIComponent(
    get(props, "match.params.categoryName", "")
  );

  React.useEffect(() => {
    getCategoryResponse();
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
    <div className="plp-container">
      {loading ? (
        <LoadingSpinner className="plp-loading-spinner d-flex justify-content-center" />
      ) : (
        <Row className="mw-100 my-5">
          <Col>
            <Accordion defaultActiveKey="0" style={{ color: "white" }}>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Category
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="category-pane">
                  {categoryListFromContext?.map((categoryName, index) => {
                    return (
                      <Link
                        className={`category-list  ${
                          categoryId === categoryName ? "glow" : ""
                        }`}
                        key={categoryName + index}
                        to={`${DOMAINPATH}/category/${encodeURIComponent(
                          categoryName
                        )}`}
                      >
                        {categoryName}
                      </Link>
                    );
                  })}
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
export default PLP;

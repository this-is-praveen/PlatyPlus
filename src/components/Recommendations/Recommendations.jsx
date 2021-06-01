import get from "get-value";
import React, { useContext } from "react";
import { Accordion, Card, CardDeck, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFetch from "use-http";
import { LoadingSpinner } from "../../assets/svg";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import { API_END_POINT, DOMAINPATH } from "../../redux/ActionTypes";
import ContextData from "../../routes/context/Context";
import SwiperComponent from "../Swiper/Swiper";
import "./styles.scss";

const Recommendations = (props) => {
  const [recommendationsResponse, setRecommendationsResponse] = React.useState(
    []
  );
  const { get: getResponse, response, loading } = useFetch(API_END_POINT);

  React.useEffect(() => {
    getRecommendationsResponse();
  }, []);

  const getRecommendationsResponse = async () => {
    const productsResponse = await getResponse(`/products?limit=10`);
    if (response.ok) {
      setRecommendationsResponse(productsResponse);
    }
  };
  const productCarouselOption = {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };
  console.log("recommendationsResponse ,", recommendationsResponse);
  const swiperChildren = recommendationsResponse.length
    ? recommendationsResponse.map((data) => {
        return {
          alt: data.title,
          imgSrc: data.image,
          href: `${DOMAINPATH}/product/${data.id}`,
        };
      })
    : [];
  return (
    <Row className="recommendation-products my-5">
      <h3 className="recommended-title">Recommended Products:</h3>
      <SwiperComponent
        swiperProps={{
          coverflowEffect: productCarouselOption,
          effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: "auto",
          pagination: false,
        }}
        children={swiperChildren}
        lazy={true}
        lazyLoadeProps={{}}
      />
    </Row>
  );
};
export default Recommendations;

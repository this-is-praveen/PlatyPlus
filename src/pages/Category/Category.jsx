import React from "react";
import useFetch from "use-http";
import { API_END_POINT } from "../../redux/ActionTypes";
import get from "get-value";
import SwiperComponent from "../../components/Swiper/Swiper";
import { LoadingSpinner } from "../../assets/svg";
import "./styles.scss";
const Category = (props) => {
  const [categoryResponse, setCategoryResponse] = React.useState([]);
  const {
    get: getResponse,
    response,
    error,
    loading,
  } = useFetch(API_END_POINT);
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
  const swiperProps = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    // slidesPerView: 3,
    // slidesPerColumn: 2,
    // spaceBetween: 10,
  };

  return (
    <div className="catalog-container">
      {loading ? (
        <LoadingSpinner className="catalog-loading-spinner d-flex justify-content-center" />
      ) : (
        <SwiperComponent
          swiperProps={swiperProps}
          children={categoryResponse.map((data) => get(data, "image", ""))}
        />
      )}
    </div>
  );
};
export default Category;

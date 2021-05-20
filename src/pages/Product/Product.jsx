import React from "react";
import useFetch from "use-http";
import { API_END_POINT } from "../../redux/ActionTypes";

const Product = (props) => {
  const { post, response, loading, error } = useFetch(API_END_POINT);

  return <div>Product</div>;
};
export default Product;

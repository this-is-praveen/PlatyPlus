import get from "get-value";
import React, { useContext } from "react";
import useFetch from "use-http";
import { API_END_POINT } from "../../redux/ActionTypes";
import ContextData from "../../routes/context/Context";
import "./styles.scss";

export const GetCategory = () => {
  const context = useContext(ContextData);
  const contextData = get(context, "contextObj", {});
  const [categoryList, setCategoryList] = React.useState([]);
  const { get: getResponse, response } = useFetch(API_END_POINT);

  React.useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
    const categoryListResponse = await getResponse("/products/categories");
    if (response.ok) {
      contextData["categoryList"] = categoryListResponse;
      context.setContextObj(contextData);
      setCategoryList(categoryListResponse);
    }
  };

  return categoryList;
};

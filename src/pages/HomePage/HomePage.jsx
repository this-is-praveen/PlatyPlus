import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SwiperComponent from "../../components/Swiper/Swiper";
import "./styles.scss";

const HomePage = (props) => {
  useEffect(() => {
    document.title = "Welcome User";
  });
  return (
    <React.Fragment>
      <div>Welcome to Home</div>
    </React.Fragment>
  );
};
export default HomePage;

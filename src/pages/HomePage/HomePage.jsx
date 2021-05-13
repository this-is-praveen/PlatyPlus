import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const HomePage = (props) => {
  useEffect(() => {
    document.title = "Welcome User";
  });
  return <div>Welcome to Home</div>;
};
export default HomePage;

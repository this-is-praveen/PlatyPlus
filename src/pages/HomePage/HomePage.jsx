import React, { useEffect } from "react";
import "./styles.scss";

const HomePage = (props) => {
  useEffect(() => {
    document.title = "Welcome User";
  });
  return <div>hi</div>;
};
export default HomePage;

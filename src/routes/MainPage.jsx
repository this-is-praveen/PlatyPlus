import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Routes from "./Routes";

const MainPage = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};
export default MainPage;

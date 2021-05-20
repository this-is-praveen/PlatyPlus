import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Routes from "./Routes";
import { Provider } from "react-redux";
import reduxStore from "../redux/store";
import ContextProvider from "./context/Context";
import { PersistGate } from "redux-persist/integration/react";

const MainPage = (props) => {
  const [theme, setTheme] = React.useState("normal");

  return (
    <BrowserRouter>
      <Provider store={reduxStore.store}>
        <PersistGate loading={null} persistor={reduxStore.persistore}>
          <ContextProvider value={{ theme, setTheme }}>
            <Header />
            <Routes />
            <Footer />
          </ContextProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};
export default MainPage;

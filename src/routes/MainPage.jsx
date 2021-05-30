import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Routes from "./Routes";
import { Provider } from "react-redux";
import reduxStore from "../redux/store";
import { ContextDataProvider } from "./context/Context";
import { PersistGate } from "redux-persist/integration/react";

const MainPage = (props) => {
  const [contextObj, setContextObj] = React.useState({ data: {} });

  return (
    <BrowserRouter>
      <Provider store={reduxStore.store}>
        <PersistGate loading={null} persistor={reduxStore.persistore}>
          <ContextDataProvider value={{ contextObj, setContextObj }}>
            <Header />
            <Routes />
            <Footer />
          </ContextDataProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};
export default MainPage;

import React from "react";
import { Route, Switch } from "react-router-dom";
import PLP from "../pages/PLP/PLP";
import HomePage from "../pages/HomePage/HomePage";
import { LoginForm } from "../pages/Login/Login";
import Page404 from "../pages/Page404";
import Product from "../pages/Product/Product";
import Checkout from "../pages/Checkout/Checkout";
// const LoadableComponent = loadable((props) => import(`../pages/${props.path}`));

// const routerChildren = () => {
//   const routeChild = pathParams.map((pathWay, index) => {
//     const exactPath = get(pathWay, "exact", false);
//     return (
//       <Route
//         exact={exactPath}
//         key={index}
//         path={pathWay?.path}
//         render={(routerProps) => {
//           return <LoadableComponent path={pathWay.pageName} {...routerProps} />;
//         }}
//       />
//     );
//   });
//   routeChild.push(<Route key={pathParams.length} component={Page404} />);
//   return routeChild;
// };

const Routes = () => {
  return (
    <div className="route-content">
      <Switch>
        <Route exact path="/PlatyPlus" component={HomePage} />
        <Route exact path="/PlatyPlus/product/:productId" component={Product} />
        <Route exact path="/PlatyPlus/category/:categoryName" component={PLP} />
        <Route exact path="/PlatyPlus/login" component={LoginForm} />
        <Route exact path="/PlatyPlus/checkout" component={Checkout} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
};

export default Routes;

import loadable from "@loadable/component";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Page404 from "../pages/Page404";
import pathParams from "./pathParams";

const LoadableComponent = loadable((props) => import(`../pages/${props.path}`));

const routerChildren = () => {
  const routeChild = pathParams.map((pathWay, index) => {
    return (
      <Route
        exact
        key={index}
        path={pathWay?.path}
        render={(routerProps) => {
          return <LoadableComponent path={pathWay.pageName} {...routerProps} />;
        }}
      />
    );
  });
  routeChild.push(<Route key={pathParams.length} component={Page404} />);
  return routeChild;
};

const Routes = () => {
  const children = routerChildren();
  return (
    <div className="route-content">
      <Switch>{children}</Switch>
    </div>
  );
};

export default Routes;

import React from "react";
import { Route } from "react-router-dom";
import Login from "../features/authentication/login.js";
import { isUserLoggedIn } from "../utilities/helper-functions";

const ProtectedRoute = ({ component: Component, path }) => {
  return (
    <Route
      path={path}
      render={() => {
        if (isUserLoggedIn()) {
          return <Component />;
        } else {
          return <Login />;
        }
      }}
    ></Route>
  );
};

export default ProtectedRoute;

import React from "react";
import { Route } from "react-router-dom";
import AllApplications from "../features/manage-applications/all-applications.js";
import { isUserLoggedIn, clearUserInfo } from "../utilities/helper-functions";

const VerifiedRoute = ({ component: Component, path }) => {
  return (
    <Route
      path={path}
      render={() => {
        if (isUserLoggedIn()) {
          return <AllApplications />;
        } else {
          clearUserInfo();
          return <Component />;
        }
      }}
    ></Route>
  );
};

export default VerifiedRoute;

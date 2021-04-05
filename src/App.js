import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

// import AppHeader from "../src/components/app-header.js";
import Login from "../src/features/authentication/login.js";
import Register from "../src/features/registration/register.js";
import AllApplications from "./features/manage-applications/all-applications.js";
import CreateApplication from "./features/create-application/create-application.js";
import ProtectedRoute from "../src/components/ProtectedRoute.js";
import VerifiedRoute from "../src/components/VerifiedRoute.js";

const GlobalStyle = createGlobalStyle`
  body {
    background: #262626;
  }
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <VerifiedRoute exact component={Register} path="/register" />
        <VerifiedRoute exact component={Login} path={["/", "/login"]} />
        <ProtectedRoute
          exact
          component={AllApplications}
          path="/all-applications"
        />
        <ProtectedRoute
          exact
          component={CreateApplication}
          path="/create-application"
        />
      </Switch>
    </Router>
  );
};

export default App;

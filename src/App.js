import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppHeader from '../src/components/app-header.js'
import Login from '../src/features/authentication/login.js'
import Register from '../src/features/registration/register.js'
import AllApplications from '../src/features/applications/all-applications.js'

const App = () => {
    return (
        <Router>
            <AppHeader />
            <Switch>
                <Route exact path={["/", "/login"]} render={() => <Login />} />
                <Route exact path="/register" render={() => <Register />} />
                <Route exact path="/all-applications" render={() => <AllApplications />} />
            </Switch>
        </Router >
    )
}

export default App
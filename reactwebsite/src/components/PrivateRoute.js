import React from "react";
import {Route} from "react-router-dom";
import {withAuthenticationRequired} from "@auth0/auth0-react";

// If user tries to access internal page when logged out, redirect to the landing page
const PrivateRoute = ({component, ...args}) => (
    <Route
    component={withAuthenticationRequired(component)}
    {...args}
    />

);

export default PrivateRoute;
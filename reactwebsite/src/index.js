import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

/* Code here is just to render router and website*/
ReactDOM.render(
  <Auth0Provider
    domain = {domain}
    clientId = {clientId}
    redirectUri = {window.location.origin}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root')
);

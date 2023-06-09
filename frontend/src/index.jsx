import React from 'react'
import ReactDOM from "react-dom";


import { BrowserRouter } from 'react-router-dom';

import { StrictMode } from "react";

import App from "./App";

import {Auth0Provider} from '@auth0/auth0-react'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider 
    domain="dev-0ryh5kl108fohim4.us.auth0.com"
    clientId="ZQAt2JnYqJIuRLOL2HVWxdBsJe1fNrCt"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  rootElement
);

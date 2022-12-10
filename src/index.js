import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-say0ud04eqzlsg0l.us.auth0.com"
    clientId="6Z3h8WmLUsr1kDPxvyoiT8vTjOYSuPuF"
    redirectUri={window.location.origin+'/loggedin'}> 
    <App />
  </Auth0Provider>
);



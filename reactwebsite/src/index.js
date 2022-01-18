import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Login from './Login'

/* Code here is just to render router and website*/
ReactDOM.render(
  <React.StrictMode>
      <div className="g-signin">
      <Login />
      </div>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

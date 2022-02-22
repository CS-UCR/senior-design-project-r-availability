import React from "react";
import {Link } from "react-router-dom";
import LoginButton from '../components/LoginButton';
import Profile from '../components/Profile';
import {withAuthenticationRequired} from "@auth0/auth0-react";


  function Landing() {
    return (
          <div>
              <h1><center>This is the R'Availability Landing Page</center></h1>
              <center><LoginButton /></center>
              <Profile />
          </div>
    );
  }
    export default Landing;



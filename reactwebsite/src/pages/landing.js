import React from "react";
//import {Link } from "react-router-dom";
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import Profile from '../components/Profile';


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



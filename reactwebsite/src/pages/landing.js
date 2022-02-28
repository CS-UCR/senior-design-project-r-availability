import React from "react";
//import {Link } from "react-router-dom";
import LoginButton from '../components/LoginButton';
import Profile from '../components/Profile';

  function Landing() {
    return (
          <div>
              <h1><center>This is the R'Availability Landing Page</center></h1>
              <center><LoginButton /></center>
              <Profile />
              <script type = "text/JavaScript">
                  function AutoRefresh(t) {
                    setTimeout("location.reload(true);", 5000)
                  }
              </script>
              <body onload = "JavaScript:AutoRefresh(5000);"></body>
          </div>
    );
    }
    export default Landing;



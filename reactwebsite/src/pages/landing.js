  import React from "react";
  import {Link } from "react-router-dom";

    function Landing() {

        return (
          <div>
              <h1><center>This is the R'Availability Landing Page</center></h1>
            <center><Link to="/Home"><button>
              Enter Website
            </button>
            </Link></center>
          </div>
        );

    }

    export default Landing;



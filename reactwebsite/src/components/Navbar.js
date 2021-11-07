import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar() {
  return (
  <div>
    <ul>

    <li>
      <Link to="/About">About</Link>
    </li>

    <li>
      <Link to="/">Home</Link>
    </li>


    </ul>
  </div>
  );
}


export default Navbar;
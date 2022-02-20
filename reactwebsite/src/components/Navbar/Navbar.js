import React, {Component} from 'react'; 
import {MenuItems} from "./MenuItems"
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }


    handleClick = () => {
      this.setState({clicked: !this.state.clicked})
    }

    render() {
      return(
         <nav className="NavbarItems">
            <h1 className="navbar-logo"> R'Availability </h1>
            <div className="menu-icon" onClick={this.handleClick}>
              <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                  {MenuItems.map((item, index) =>  {
                  return (
                    <li key={index}>
                      <a className={item.cName} href={item.url}>
                        {item.title}
                      </a>
                    </li>
                  )
              })}
            </ul>  
          </nav>
      )
    }
}

export default Navbar











/*import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar() {
  return (
  <div>
    <ul>


    <li>
      <Link to="/recordList" replace>Records</Link>
    </li>

    <li>
      <Link to="/About" replace>About</Link>
    </li>

    <li>
      <Link to='/'>Home</Link>
    </li>


    </ul>
  </div>
  );
}


export default Navbar;*/
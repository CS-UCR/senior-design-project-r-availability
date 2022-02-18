import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import './About.css';

/* This is just the about page */
function About() {
  return (
    <div>
      <Navbar /> 
      <h2>
        About
      </h2> 
      <br></br>
      <p>R'Availability allows any UCR student and faculty to see the occupancy of selected locations at UCR. Through the website, the user is able to see the total occupancy of a given location and how occupied a location is. This project uses motion detectors installed at the doors to gather data on room occupancy.</p>
      <br></br>
      <p>Creators: <br></br>
                   Shubham Batra <br></br>
                   Thomas Gustafason <br></br>
                   Jorge Ruiz <br></br>
                   Xiao Feng <br></br>
      </p>
    </div> 
  )
}

export default About;

import React from 'react';
import Navbar from '../components/Navbar';
import Title from '../Title';
import './About.css';

/* This is just the about page */
function About() {
  return (
    <div>
      <Navbar />
      <Title />
      <h2>
        About
      </h2> 
      <p>R'Availability allows any UCR student and faculty to see the occupancy of selected locations at UCR. Through the website, the user is able to see the total occupancy of a given location and how occupied a location is. This project uses motion detectors installed at the doors to gather data on room occupancy.</p>
      <p>Creators: Shubham Batra
                   Thomas Gustafason
                   Jorge Ruiz
                   Xiao Feng
      </p>
    </div> 
  )
}

export default About;

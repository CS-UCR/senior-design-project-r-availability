import { Container } from '@material-ui/core';
import React from 'react';
import Navbar from '../components/Navbar';
import './About.css';
import Title from '../Title';

const handleClick = () =>
{
console.log('hello, highlanders, Lets check out where you want to go');
}


function About() {
  return (  
    <div>
       <div className="about">
      <h1> R'MAP</h1>
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

      This page shows the map of UCR.
      <img src="UCRMAP3.jpeg" alt="" ></img>
      <button onClick={handleClick}>click me</button>
      </div>
    <div/> 
  )
}

export default About;

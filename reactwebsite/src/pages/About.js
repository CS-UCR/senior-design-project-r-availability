import { Container } from '@material-ui/core';
import React from 'react';
import Navbar from '../components/Navbar';
import './About.css';


const handleClick = () =>
{
console.log('hello, highlanders, Lets check out where you want to go');
}



function About() {
  return (  
    <>
       <div className="about">
      <h1> R'MAP</h1>
      <Navbar />

      This page shows the map of UCR.
      <img src="UCRMAP3.jpeg" alt="" ></img>
      <button onClick={handleClick}>click me</button>
      </div>
    </> 
  )
}

export default About;

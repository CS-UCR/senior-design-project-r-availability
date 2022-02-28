import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import './About.css';

/* This is just the about page */
function About() {
  return (
    <div>
      <Navbar /> 
      <h1>
        About
      </h1> 
      <br></br>
      <p>
        R'Availability allows any UCR student and faculty to see the occupancy of selected locations at UCR. 
        Through the website, the user is able to see the total occupancy of a given location and how occupied a location is. 
        This project uses motion detectors installed at the doors to gather data on room occupancy.
      </p>
      <br></br>
      <h2>
        Creators: 
      </h2>
      <br></br>
      <p>
        Shubham Batra <br></br>
        Thomas Gustafason <br></br>
        Jorge Ruiz <br></br>
        Xiao Feng <br></br>
      </p>
      <br></br>
      <h2>
        Usage
      </h2>
      <br></br>
      <p>
        The website is currently deployed and viewable at https://r-availability.herokuapp.com/ <br></br> <br></br>

        To run the application, clone the current project and move into the reactwebsite directory in one terminal and websiteserver directory in another terminal. 
        In the reactwebsite directory, type 'npm start'. In the websiteserver folder, type 'nodemon server.js'. 
        After this, the website will open up on localhost:3000.
      </p>
      <br></br>
      <h2>
        Website Stack
      </h2>
      <br></br>
      <p>
        image goes here
      </p>
    </div> 
  )
}

export default About;

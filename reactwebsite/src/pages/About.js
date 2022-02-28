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
      <br></br>
      <h2>
        Dependencies
      </h2>
      <br></br>
      <h3>
        Front End
      </h3>
      <p>
        @material-ui/core: v4.12.3 <br></br>
        @testing-library/jest-dom: v5.14.1 <br></br>
        @testing-library/react: v11.2.7 <br></br>
        @testing-library/user-event: v12.8.3 <br></br>
        axios: v0.24.0 <br></br>
        bootstrap: v5.1.3 <br></br>
        react: v17.0.2 <br></br>
        react-dom: v17.0.2 <br></br>
        react-router-dom: v5.3.0 <br></br>
        react-scripts: v4.0.3 <br></br>
        web-vitals: v1.1.2 <br></br>
      </p>
      <br></br>
      <h3>
        Backend
      </h3>
      <p>
        cors: v2.8.5 <br></br>
        dotenv: v10.0.0 <br></br>
        express: v4.17.1 <br></br>
        mongodb: v4.2.0 <br></br>
        mongoose: v6.2.1 <br></br>
        nodemon: v2.0.15 <br></br>
        concurrently: v5.0.0 <br></br>
      </p>
    </div> 
  )
}

export default About;

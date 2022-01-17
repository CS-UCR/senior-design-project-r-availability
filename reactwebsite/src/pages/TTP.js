import React from 'react';
import Navbar from '../components/Navbar';
import Title from '../Title';

function TTP() {
    return (
      <div>
        <Navbar />
        <Title />
        <div className="flex-container">

        <div><h1>TTP</h1>
          <p>Occupancy: 12/30</p>
          <p>Occupancy Status: Busy</p>
        </div>

        </div>
      </div> 
    )
  }
  
  export default TTP;
  
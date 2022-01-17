import React from 'react';
import Navbar from '../components/Navbar';
import Title from '../Title';
import './Bytes.css';

function Bytes() {
    return (
      <div>
        <Navbar />
        <Title />
        <div className="flex-container">

        <div><h1>Bytes</h1>
          <p>Occupancy: 4/30</p>
          <p>Occupancy Status: Light</p>
        </div>

        </div>
      </div> 
    )
  }
  
  export default Bytes;
  
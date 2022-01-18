import React from 'react';
import Navbar from '../components/Navbar';
import Title from '../Title';

function Orbach() {
    return (
      <div>
        <Navbar />
        <Title />
        
        <div className="flex-container">
        <div><h1>Orbach</h1>
          <p>Occupancy: 12/30</p>
          <p>Occupancy Status: Normal</p>
        </div>
        </div>
      </div> 
    )
  }
  
  export default Orbach;
  
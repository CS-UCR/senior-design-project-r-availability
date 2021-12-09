import React from 'react';
import Navbar from '../components/Navbar';
import Title from '../Title';
import './Home.css';

function Home() {
return (
<div>
    < Navbar />
    <Title />
      <header className="App-header">
	    <p>
	    Information about various rooms are shown below
	    </p>
      </header>
      <div className="flex-container">

        <div><h1>Bytes</h1>
          <p>Occupancy: 4/30</p>
          <p>Occupancy Status: Light</p>
        </div>

        <div><h1>TTP</h1>
          <p>Occupancy: 12/30</p>
          <p>Occupancy Status: Busy</p>
        </div>

        <div><h1>Other</h1>
          <p>Occupancy: 12/30</p>
          <p>Occupancy Status: Normal</p>
      </div>

    </div>
</div>
)
}

export default Home;
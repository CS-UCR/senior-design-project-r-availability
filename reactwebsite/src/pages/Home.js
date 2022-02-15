import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import './Home.css';

function Home() {
return (
<div>
  <Navbar />
    <br></br>
      <header className="App-header">
	    <p>
	    <center>Click on a specific location to view the occupancy. At the moment, the only available places are Orbach, TTP, and Bytes.</center>
	    </p>
      </header>
      <br></br>
      
    <div className = "Clickable-Image">
      <img src="UCRMAP3.jpg" alt="UCR MAP" usemap="#workmap" />
      <map name="workmap">
        <area shape="rect" coords="400,100,500,200" alt="Orbach" href="Orbach" />
        <area shape="rect" coords="350,20,400,80" alt="TTP" href="TTP"/>
        <area shape="rect" coords="320,120,410,150" alt="Bytes" href="Bytes"/>
</map>
    </div>
</div>
)
}

export default Home;


<div className = "Clickable-Image">
<img src="MAP3.jpg" alt="MAP" usemap="#workmap" />
<map name="workmap">
  <area shape="rect" coords="400,100,500,200" alt="Orb" href="Room" />
  <area shape="rect" coords="350,20,400,80" alt="TTPH" href="Room"/>
  <area shape="rect" coords="320,120,410,150" alt="Bull" href="Room"/>
</map>
</div>
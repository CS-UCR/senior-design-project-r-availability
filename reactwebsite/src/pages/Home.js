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
	    <center>Click on a specific location to view the occupancy. At the moment, the only available places are Orbach, TTP, and Bytes.</center>
	    </p>
      </header>
      
    <div className = "Clickable-Image">
      <img src="UCRMAP3.jpg" alt="UCR MAP" usemap="#workmap" />
      <map name="workmap">
        <area shape="rect" coords="400,100,500,200" alt="Orbach" href="Orbach"/>
        <area shape="rect" coords="350,20,400,80" alt="TTP" href="TTP"/>
        <area shape="rect" coords="320,120,410,150" alt="Bytes" href="Bytes"/>
        
</map>
    </div>
</div>
)
}

export default Home;
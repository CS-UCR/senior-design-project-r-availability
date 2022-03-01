import React from "react";
import LoginButton from '../components/LoginButton';
import './landing.css';

  function Landing() {
    return (
          <div>
            <div class = "title">
              <h1> R'Availability </h1>
              </div>
              <br></br>
              <div class="flex-container">
                <div class="box1">
                    A tool for all UCR students and Faculty
                </div>
                <div class = "box2"> 
                  <h2>
                    <div class = "UCRimage">
                  <img src="newUCR.jpg" alt="UCR"/>
                    </div>
                    </h2>
                    </div>
              </div>
              <div class = "flex-container2">
                <div class="box3">
                  Image 1
                </div>
                <div class="box4">
                  Image 2
                </div>
                <div class="box5">
                  Image 3
                </div>
              </div>
              <center><LoginButton /></center>
          </div>
          
    );
    }
    export default Landing;



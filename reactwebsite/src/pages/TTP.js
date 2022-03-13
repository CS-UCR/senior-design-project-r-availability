import {useState, useEffect} from "react";
import Axios from "axios" 
import Navbar from '../components/Navbar/Navbar.js';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function TTP() {
  const [listOfUsers, setListOfUsers] = useState([]);

  // Locally, use "http://localhost:5000/getTTP" instead of "https://r-availability.herokuapp.com/getTTP"

  useEffect(() => {
      Axios.get("https://r-availability.herokuapp.com/getTTP").then((response) =>  {
        setListOfUsers(response.data) 
      }, error => {
          console.log(error)
      } )
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="usersDisplay">
          {listOfUsers.map((TTP) => {
            return (
              <div> 


<Card sx={{ maxWidth: 1300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image= '/assets/TTP.jpg'
          alt="TTP"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Current TTP Info - Updated every 15 minutes
          </Typography>
          <Typography variant="body2" color="text.secondary">

                <h1>Occupancy: {TTP.occupancy} </h1>
                <h1>Seats: {TTP.seats} </h1>
                <h1>Time: {TTP.time} </h1>
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
                <br></br>
                <img src="ttp_occupancy.png" alt="TTP Room Occupancy"/>
                <script type = "text/JavaScript">
                  function AutoRefresh(t) {
                    setTimeout("location.reload(true);", 15000)
                  }
              </script>
              <body onload = "JavaScript:AutoRefresh(15000);"></body>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TTP;
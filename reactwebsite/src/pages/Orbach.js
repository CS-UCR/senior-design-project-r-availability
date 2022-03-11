import {useState, useEffect} from "react";
import Axios from "axios" 
import Navbar from '../components/Navbar/Navbar.js';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Orbach() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
      Axios.get("https://r-availability.herokuapp.com/getOrbach").then((response) =>  {
        setListOfUsers(response.data) 
      }, error => {
          console.log(error)
      } )
  }, []);


  return (
    <div className="App">
      <Navbar />
      <div className="usersDisplay">
          {listOfUsers.map((Orbach) => {
            return (
              <div> 

<Card sx={{ maxWidth: 1300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image= '/assets/orbach.jpeg'
          alt="Orbach library"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Current Orbach Info - Updated every 15 minutes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          <h1>Occupancy: {Orbach.occupancy} </h1>
                <h1>Seats: {Orbach.seats} </h1>
                <h1>Time: {Orbach.time} </h1>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
              
                <script type = "text/JavaScript">
                  function AutoRefresh(t) {
                    setTimeout("location.reload(true);", 5000)
                  }
              </script>
              <body onload = "JavaScript:AutoRefresh(5000);"></body>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Orbach;


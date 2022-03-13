import {useState, useEffect} from "react";
import Axios from "axios" 
import Navbar from '../components/Navbar/Navbar.js';

function Bytes() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
      Axios.get("https://r-availability.herokuapp.com/getBytes").then((response) =>  {
        setListOfUsers(response.data) 
      }, error => {
          console.log(error)
      })
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="usersDisplay">
          {listOfUsers.map((Bytes) => {
            return (
              <div> 
                <h1>Current Bytes Info - Updated every 15 minutes</h1>
                <br></br>
                <h1>Occupancy: {Bytes.occupancy} </h1>
                <h1>Seats: {Bytes.seats} </h1>
                <h1>Time: {Bytes.time} </h1>
                <br></br>
                <img src="bytes_occupancy.png" alt="Bytes Room Occupancy"/>
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

export default Bytes;
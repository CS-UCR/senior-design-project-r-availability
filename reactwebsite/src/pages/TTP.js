import {useState, useEffect} from "react";
import Axios from "axios" 
import Navbar from '../components/Navbar/Navbar.js';

// Locally, use "http://localhost:5000/getTTP" instead of "https://r-availability.herokuapp.com/getTTP"

function TTP() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
      Axios.get("http://localhost:5000/getTTP").then((response) =>  {
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
                <h1>Current TTP Info - Updated every 15 minutes</h1>
                <br></br>
                <h1>Occupancy: {TTP.occupancy} </h1>
                <h1>Seats: {TTP.seats} </h1>
                <h1>Time: {TTP.time} </h1>
                <br></br>
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

export default TTP;
import {useState, useEffect} from "react";
import Axios from "axios" 
import Navbar from '../components/Navbar/Navbar.js';

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
                <h1>Current Orbach Info - Updated every 15 minutes</h1>
                <br></br>
                <h1>Occupancy: {Orbach.occupancy} </h1>
                <h1>Seats: {Orbach.seats} </h1>
                <h1>Time: {Orbach.time} </h1>
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

export default Orbach;
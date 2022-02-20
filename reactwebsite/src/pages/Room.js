import {useState, useEffect} from "react";
import Axios from "axios" 
import Navbar from '../components/Navbar/Navbar.js';

function Room() {
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
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Room;
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import  { useState, useEffect } from "react";
import Axios from 'axios';

const Profile = () => {
  // Constant variables
  const { user, isAuthenticated } = useAuth0();
  const [ message, setMessage ] = useState("");
  const [favroom, setFavroom] = useState("");
  const [ userInfo, setUserInfo ] = useState([]);


  // To add message to database
  // Locally, use "http://localhost:5000/insertUserInfo" instead of "https://r-availability.herokuapp.com/insertUserInfo"
  const addMessage = () => {
      Axios.post("https://r-availability.herokuapp.com/insertUserInfo", {
      message: message,
      email: user.email
      })
      .then(()=> {
        console.log("Message sent to Database");
      })
      .catch(() => {
        console.log("Error, Message not sent to database");
      })
  };

  // To add favroom to database
  // Locally, use "http://localhost:5000/insertUserInfo" instead of "https://r-availability.herokuapp.com/insertUserInfo"
  const addFavroom = () => {
    Axios.post("https://r-availability.herokuapp.com/insertUserInfo", {
      favroom: favroom,
      email: user.email
      })
      .then(()=> {
        console.log("Favroom sent to Database");
      })
      .catch(() => {
        console.log("Error, favroom not sent to database");
      })
  };
  
  // To get data to display for each specific user
  // Locally, use "http://localhost:5000/getUserInfo" instead of "https://r-availability.herokuapp.com/getUserInfo"
  useEffect(() => {
    Axios.post("https://r-availability.herokuapp.com/getUserInfo", {
      email: user.email
    }).then((response) =>  {
       setUserInfo(response.data)
       console.log(`Data sent to Client`)
    }, error => {
        console.log(error)
    } )
}, []);

/*constructor() {
  super();
  this.state = {
    name: "React"
  };
  this.onChangeValue = this.onChangeValue.bind(this);
}*/

// Trying to implement the radio buttons for the user to select the favorite room but unable to 
// implement it. Also, issue with form when pressing submit message. Sometimes, message doesn't update?
  return (  
      isAuthenticated && (
      <div>
           <img src={user.picture} alt={user.name}></img>
           <h2>Name: {user.nickname}</h2>
           <p>Email: {user.email}</p>
            <br></br>
           <p>Select Favorite Room (Future Feature)</p>
            
           {userInfo && (
             <div>
                <p>{userInfo.favroom}</p>
                </div>
           )}

            <br></br>
           <p>Insert a personal message below here</p>
        <div>
        <form id="form1">
           <input type="text" placeholder="Enter message here" value={message} onChange={(event) => {setMessage(event.target.value)}} />
           <button onClick={addMessage} form="form1">Submit</button>
        </form>
        </div>
        <p>Current Message: </p>
        {userInfo && (
            <div>
              <p>{userInfo.message}</p>
            </div>
          )}
      </div>
      )
    )
};
// Create a button that refreshes onclick
// <button onClick={() => window.location.reload()}>Refresh</button>

  /*<textarea cols="50" rows="5" placeholder="Enter message here" value={message} onChange={(event) => {setMessage(event.target.value)}} />
    <br></br>
    <button onClick={addMessage}>Submit Message</button>*/


    /*</form><form>
  <input type="radio"  id="ttp" name="rooms" value="TTP"/>
  <label for="ttp">TTP</label><br></br>
  <input type="radio"  id="bytes" name="rooms" value="Bytes"/>
  <label for="bytes">Bytes</label><br></br>
  <input type="radio"  id="orbach" name="rooms" value="Orbach"/>
  <label for="orbach">Orbach</label>
  <br></br>
  <button onClick={addMessage} form="form">Submit Favorite Room</button>
  </form>*/

             /*<form onSubmit={addFavroom}>
<div className="radio">
  <label>
    <input
      type="radio"
      value="TTP"
      checked={this.state.name === "TTP"}
      onChange={(event) => {setMessage(event.target.value)}}
    />
    TTP
  </label>
</div>
<div className="radio">
  <label>
    <input
      type="radio"
      value="Bytes"
      checked={this.state.name === "Bytes"}
      onChange={(event) => {setFavroom(event.target.value)}}
    />
    Bytes
  </label>
</div>
<div className="radio">
  <label>
    <input
      type="radio"
      value="Orbach"
      checked={this.state.name === "Orbach"}
      onChange={(event) => {setFavroom(event.target.value)}}
    />
    Orbach
  </label>
</div>
<div>
  Selected option is : {this.state.name}
</div>
<button className="btn btn-default" type="submit">
  Submit
</button>
</form>*/

export default Profile;

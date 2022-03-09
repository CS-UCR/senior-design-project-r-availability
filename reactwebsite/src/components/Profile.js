import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import  { useState, useEffect } from "react";
import Axios from 'axios';

const Profile = () => {
  // Constant variables
  const { user, isAuthenticated } = useAuth0();
  const [ message, setMessage ] = useState("");
  const [ userInfo, setUserInfo ] = useState([]);


  // To add data to database
  // Locally, use "http://localhost:5000/insertUserInfo" instead of "https://r-availability.herokuapp.com/insertUserInfo"
  const addMessage = () => {
    alert(message)
      Axios.post("https://r-availability.herokuapp.com/insertUserInfo", {
      message: message,
      email: user.email
      })
      .then(()=> {
        console.log("Data sent to Database");
      })
      .catch(() => {
        console.log("Error, data not sent to database");
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

  return (  
      isAuthenticated && (
      <div>
           <img src={user.picture} alt={user.name}></img>
           <h2>Name: {user.nickname}</h2>
           <p>Email: {user.email}</p>
            <br></br>
           <p>Favorite Room (Future Feature): </p>
            <br></br>
           <p>Insert a personal message below here</p>
        <div>
           <input type="text" placeholder="Enter message here" value={message} onChange={(event) => {setMessage(event.target.value)}} />
           <button onClick={addMessage}>Submit</button>
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

export default Profile;
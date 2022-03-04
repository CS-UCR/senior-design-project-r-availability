import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import  { useState } from "react";
import Axios from 'axios';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [ message, setMessage ] = useState("");

  const addMessage = () => {
    alert(message)
      Axios.post('http://localhost:5000/insertUserInfo', {
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

  return (  
      isAuthenticated && (
      <div>
           <img src={user.picture} alt={user.name}></img>
           <h2>Name: {user.nickname}</h2>
           <p>Email: {user.email}</p>
            <br></br>
           <p>Favorite Room (Select): </p>
           <p>Insert a personal message below here</p>
        <div>
           <input type="text" placeholder="Enter message here" value={message} onChange={(event) => {setMessage(event.target.value)}} />
           <button onClick={addMessage}>Submit</button>
        </div>
      </div>
      )
    )
};

export default Profile;
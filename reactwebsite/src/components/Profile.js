import React from "react";
import { useAuth0 } from "@auth0/auth0-react";



const Profile = () => {
  const { user, isAuthenticated } = useAuth0();


  return (  
      isAuthenticated && (
      <div>
           <img src={user.picture} alt={user.name}></img>
           <h2>Name: {user.nickname}</h2>
           <p>Email: {user.email}</p>
            <br></br>
           <p>Favorite Room (Select): </p>
      
      </div>
      )
    )
};

export default Profile;
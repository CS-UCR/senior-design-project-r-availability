import { useAuth0 } from '@auth0/auth0-react';
import './LoginButton.css';

// When working locally, use "http://localhost:5000/home" instead of 

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
      <button class="button" onClick= {() => loginWithRedirect({redirectUri:'https://r-availability.herokuapp.com/5000'}) }>
        Log In
      </button>
  )
}

export default LoginButton
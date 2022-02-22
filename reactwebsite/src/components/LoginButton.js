import { useAuth0 } from '@auth0/auth0-react';
import './LoginButton.css';

// When working locally, use "http://localhost:5000/home" instead of 

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
// When running locally, input 'http://localhost:3000/home'as the redirectURI, otherwise, should be 'https://r-availability.herokuapp.com/home'
  return (
      <button class="button" onClick= {() => loginWithRedirect({redirectUri:'https://r-availability.herokuapp.com/home'}) }>
        Log In
      </button>
  )
}

export default LoginButton  
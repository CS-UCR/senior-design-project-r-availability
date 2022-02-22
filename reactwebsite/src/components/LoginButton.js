import { useAuth0 } from '@auth0/auth0-react';
import './LoginButton.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
// When running locally, input 'http://localhost:3000/home'as the redirectURI, otherwise, should be 
  return (
      <button class="button" onClick= {() => loginWithRedirect({redirectUri:'https://r-availability.herokuapp.com/'}) }>
        Log In
      </button>
  )
}

export default LoginButton
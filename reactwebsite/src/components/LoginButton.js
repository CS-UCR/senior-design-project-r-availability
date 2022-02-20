import { useAuth0 } from '@auth0/auth0-react';
import './LoginButton.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
      <button class="button" onClick= {() => loginWithRedirect({redirectUri:'https://r-availability.herokuapp.com/home'}) }>
        Log In
      </button>
  )
}

export default LoginButton
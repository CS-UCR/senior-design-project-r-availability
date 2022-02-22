import { useAuth0 } from '@auth0/auth0-react';
import './LoginButton.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
      <button class="button" onClick= {() => loginWithRedirect({redirectUri:'http://localhost:3000/home'}) }>
        Log In
      </button>
  )
}

export default LoginButton
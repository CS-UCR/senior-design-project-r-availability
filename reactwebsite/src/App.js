import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Bytes from "./pages/Bytes"
import TTP from "./pages/TTP"
import Room from "./pages/Room"
import Orbach from "./pages/Orbach"
import Landing from "./pages/landing"
import UserProfile from "./pages/UserProfile"
import LogoutButton from "./components/LogoutButton"
import {Container} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
      <Router>
        <Switch>
          <Route path="/About"><About /></Route>
          <Route path="/Bytes"><Bytes/></Route>
          <Route path="/TTP"><TTP/></Route>
          <Route path="/Orbach"><Orbach/></Route>
          <Route path="/Room"><Room/></Route>
          <Route path="/Home"><Home /></Route>
          <Route path="/UserProfile"><UserProfile /></Route>
          <Route path="/LogoutButton"><LogoutButton /></Route>
          <Route path="/"><Landing /></Route>
        </Switch>
      </Router>
      </Container>
      
    </div>
  );
}

export default App;

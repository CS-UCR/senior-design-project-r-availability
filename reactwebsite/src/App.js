import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home, About, Bytes, TTP, Room, Orbach, Landing, UserProfile} from "./pages";
import LogoutButton from "./components/LogoutButton"
import {Container} from '@material-ui/core'
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
      <Router>
        <Switch>
          <PrivateRoute exact path="/About" component={About}/>
          <PrivateRoute exact path="/Bytes" component={Bytes}/>
          <PrivateRoute exact path="/TTP" component={TTP}/>
          <PrivateRoute exact path="/Orbach" component={Orbach}/>
          <PrivateRoute exact path="/Room" component={Room}/>
          <PrivateRoute exact path="/Home" component={Home}/>
          <PrivateRoute exact path="/UserProfile" component={UserProfile}/>
          <PrivateRoute exact path="/LogoutButton" component={LogoutButton}/>
          <Route exact path="/"><Landing /></Route>
        </Switch>
      </Router>
      </Container>
    </div>
  );
}

export default App;

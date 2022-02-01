import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Bytes from "./pages/Bytes"
import TTP from "./pages/TTP"
import UserProfile from "./pages/UserProfile" 
import Orbach from "./pages/Orbach"
import RecordList from "./components/recordlist";
import {Container} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
      <Router>
        <Switch>
          <Route path="/RecordList"><RecordList/> </Route>
          <Route path="/About"><About /></Route>
          <Route path="/Bytes"><Bytes/></Route>
          <Route path="/TTP"><TTP/></Route>
          <Route path="/Orbach"><Orbach/></Route>
          <Route path="/"><Home /></Route>
          <Route path="/UserProfile"><UserProfile/></Route> 
        </Switch>
      </Router>
      </Container>
    </div>
  );
}

export default App;


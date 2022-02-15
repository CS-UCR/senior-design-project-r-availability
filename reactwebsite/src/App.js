import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Bytes from "./pages/Bytes"
import TTP from "./pages/TTP"
import Room from "./pages/Room"
import Orbach from "./pages/Orbach"
import Landing from "./pages/landing"
import RecordList from "./components/recordlist";
import {Container} from '@material-ui/core';
import {useState, useEffect} from "react";
import Axios from "axios" 

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
      Axios.get("/getTTP").then((response) =>  {
        setListOfUsers(response.data) 
      })
  }, []);

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
          <Route path="/Room"><Room/></Route>
          <Route path="/Home"><Home /></Route>
          <Route path="/"><Landing /></Route>
        </Switch>
      </Router>
      </Container>
      <div className="usersDisplay">
          {listOfUsers.map((TTP) => {
            return (
              <div> 
                <h1>Occupancy: {TTP.occupancy} </h1>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;


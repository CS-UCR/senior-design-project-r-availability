import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Bytes from "./pages/Bytes"
import TTP from "./pages/TTP"
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
        </Switch>
      </Router>
      </Container>
    </div>
  );
}

export default App;



/*import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <RecordList />
      </Route>
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
      </Route>
    </div>
  );
};

export default App;*/
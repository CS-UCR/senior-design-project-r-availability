import './App.css';
import Title from './Title';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from "./pages/About"
import {Container} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Router>
        <Navbar />
        <Routes>
          <Route path='/App' element={<App/>} />
          <Route path='/About' element={<About/>} />
        </Routes>
      </Router>
        </Container>
      <Title />
      <header className="App-header">
	    <p>
	    Information about various rooms are shown below
	    </p>
      </header>
      <div className="flex-container">

        <div><h1>Bytes</h1>
          <p>Occupancy: 4/30</p>
          <p>Occupancy Status: Light</p>
        </div>

        <div><h1>TTP</h1>
          <p>Occupancy: 12/30</p>
          <p>Occupancy Status: Busy</p>
        </div>

        <div><h1>Other</h1>
          <p>Occupancy: 12/30</p>
          <p>Occupancy Status: Normal</p>
      </div>

    </div>
    </div>
  );
}

export default App;

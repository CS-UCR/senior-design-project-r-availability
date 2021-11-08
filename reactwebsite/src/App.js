import './App.css';
import {BrowserRouter as BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import {Container} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
      <BrowserRouter>
      <Routes>
        <Route path ='/' element ={<Home />} />
        <Route path = 'About' element={<About/>} />
      </Routes>
      </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div>
    <Router>
    <Navbar/>
    <div className="App">
      <Routes>
        <Route path="/Portfolio-Website" element={<Home/>} />
        <Route path="/Education" element={<Education/>} />
        <Route path='/Skills' element={<Skills/>} />
        <Route path='/Projects' element={<Projects/>} />
      </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;

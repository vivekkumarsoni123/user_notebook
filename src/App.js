import './App.css';
import React from "react";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/noteState';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <div className='container'>
          <Routes>
            {/* Use the element prop to render components */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
       </Router>
    </NoteState>    
    </>
  );
}

export default App;

import './App.css';
import React from "react";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/noteState';
import Alert from './Components/Alert';
// import ProtectedRoute from './Components/ProtectedRoute';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';


function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert message="A simple primary alert—check it out!" />
        <div className='container'>
          <Routes>
            {/* Use the element prop to render components */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>} /> */}
          </Routes>
        </div>
       </Router>
    </NoteState>    
    </>
  );
}

export default App;

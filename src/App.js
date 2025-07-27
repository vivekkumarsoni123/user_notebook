import './App.css';
<<<<<<< HEAD
import React, { useEffect } from "react";
=======
import React from "react";
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/noteState';
import Alert from './Components/Alert';
<<<<<<< HEAD
=======
// import ProtectedRoute from './Components/ProtectedRoute';

>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44

import {
  BrowserRouter as Router,
  Routes,
<<<<<<< HEAD
  Route,
  Navigate
=======
  Route
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
} from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';

<<<<<<< HEAD
function App() {
  useEffect(() => {
    // Clear any existing token when the app loads
    // This ensures users start at the login page
    localStorage.removeItem("token");
  }, []);

  return (
    <>
      <NoteState>
        <Router>
          <div className="min-vh-100">
            <Navbar />
            <Alert />
            <main className="flex-grow-1">
              <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </main>
          </div>
        </Router>
      </NoteState>
=======

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
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
    </>
  );
}

export default App;

import './App.css';
import React, { useEffect } from "react";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/noteState';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';

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
    </>
  );
}

export default App;

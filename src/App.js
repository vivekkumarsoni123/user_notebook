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
  Navigate,
  useLocation
} from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';

// Component to handle authentication check
const AuthCheck = ({ children }) => {
  const location = useLocation();
  
  // Clear authentication on initial load to ensure fresh start
  useEffect(() => {
    // Only clear if we're on the root path (initial load)
    if (location.pathname === "/") {
      localStorage.removeItem("token");
    }
  }, [location.pathname]);
  
  const token = localStorage.getItem("token");
  
  // If we're on login or signup page, don't redirect
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return children;
  }
  
  // If no token and trying to access protected routes, redirect to login
  if (!token && location.pathname !== "/about") {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <div className="min-vh-100">
            <AuthCheck>
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
            </AuthCheck>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;

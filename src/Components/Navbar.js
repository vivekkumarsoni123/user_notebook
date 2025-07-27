import React, { useEffect } from "react";
<<<<<<< HEAD
import { Link, useLocation } from "react-router-dom";
=======
import { Link, useLocation } from "react-router-dom"; //'a' with 'Link' and 'href' with 'to'
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

<<<<<<< HEAD
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
=======
  const handleLogout= () => {
    localStorage.removeItem("token");
    navigate("/login")
  }

  
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44

  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
<<<<<<< HEAD

  return (
    <nav className="navbar navbar-expand-lg glass-effect shadow-custom" style={{ margin: '20px', borderRadius: '20px' }}>
      <div className="container-fluid">
        <Link className="navbar-brand gradient-text fw-bold fs-3" to="/home" style={{ fontFamily: 'Inter, sans-serif' }}>
          <i className="fas fa-book-open me-2"></i>
          E-notebook
=======
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNoteBook
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
<<<<<<< HEAD
                className={`nav-link fw-medium ${
                  location.pathname === "/home" ? "active text-primary" : "text-dark"
                }`}
                aria-current="page"
                to="/home"
                style={{ transition: 'all 0.3s ease' }}
              >
                <i className="fas fa-home me-1"></i>
=======
                className={`nav-link ${
                  location.pathname === "/" ? "active" : " "
                } `}
                aria-current="page"
                to="/"
              >
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
<<<<<<< HEAD
                className={`nav-link fw-medium ${
                  location.pathname === "/about" ? "active text-primary" : "text-dark"
                }`}
                to="/about"
                style={{ transition: 'all 0.3s ease' }}
              >
                <i className="fas fa-info-circle me-1"></i>
=======
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : " "
                } `}
                to="/about"
              >
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
                About
              </Link>
            </li>
          </ul>
<<<<<<< HEAD
          {!localStorage.getItem("token") ? (
            <div className="d-flex gap-2">
              <Link to="/login" className="btn btn-modern">
                <i className="fas fa-sign-in-alt me-1"></i>
                Login
              </Link>
              <Link to="/signup" className="btn btn-modern">
                <i className="fas fa-user-plus me-1"></i>
                Signup
              </Link>
            </div>
          ) : (
            <button onClick={handleLogout} className="btn btn-modern">
              <i className="fas fa-sign-out-alt me-1"></i>
              Logout
            </button>
          )}
=======
            {!localStorage.getItem("token") ? (<form className="d-flex" > 
            <Link type="button" to="/login" className="btn btn-primary mx-1" role="button">
              Login
            </Link>
            <Link type="button" to="/signup" className="btn btn-primary" role="button">
              Signup
            </Link>
          </form>): (<button onClick={handleLogout} className="btn btn-primary">Logout</button>) }
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

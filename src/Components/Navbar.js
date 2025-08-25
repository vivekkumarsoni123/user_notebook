import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check authentication status
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, [location.pathname]); // Re-check when path changes

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg glass-effect shadow-custom" style={{ margin: '20px', borderRadius: '20px' }}>
      <div className="container-fluid">
        <Link className="navbar-brand gradient-text fw-bold fs-3" to={isAuthenticated ? "/home" : "/login"} style={{ fontFamily: 'Inter, sans-serif' }}>
          <i className="fas fa-book-open me-2"></i>
          E-notebook
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
            {isAuthenticated && (
              <li className="nav-item">
                <Link
                  className={`nav-link fw-medium ${
                    location.pathname === "/home" ? "active text-primary" : "text-dark"
                  }`}
                  aria-current="page"
                  to="/home"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <i className="fas fa-home me-1"></i>
                  Home
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link
                className={`nav-link fw-medium ${
                  location.pathname === "/about" ? "active text-primary" : "text-dark"
                }`}
                to="/about"
                style={{ transition: 'all 0.3s ease' }}
              >
                <i className="fas fa-info-circle me-1"></i>
                About
              </Link>
            </li>
          </ul>
          {!isAuthenticated ? (
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

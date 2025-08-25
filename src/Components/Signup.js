import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [credentials, setCredentials] = useState({ 
    name: "", 
    email: "", 
    password: "", 
    cpassword: "" 
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // let navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    
    if (!credentials.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!credentials.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!credentials.password) {
      newErrors.password = "Password is required";
    } else if (credentials.password.length < 5) {
      newErrors.password = "Password must be at least 5 characters";
    }
    
    if (credentials.password !== credentials.cpassword) {
      newErrors.cpassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);

    try {
      const { name, email, password } = credentials;
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const json = await response.json();
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        // Force a page reload to update the navbar state
        window.location.href = "/home";
      } else {
        alert(json.error || "Signup failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7 col-sm-9">
          <div className="card card-modern">
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <div className="mb-3">
                  <i className="fas fa-user-plus fa-4x text-primary"></i>
                </div>
                <h2 className="gradient-text fw-bold mb-2">Join E-notebook</h2>
                <p className="text-muted">Create your account to get started</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-medium">
                    <i className="fas fa-user me-2 text-primary"></i>
                    Full Name
                  </label>
                  <input
                    type="text"
                    className={`form-control border-0 bg-light rounded-3 ${
                      errors.name ? 'is-invalid' : ''
                    }`}
                    id="name"
                    placeholder="Enter your full name..."
                    name="name"
                    onChange={onChange}
                    required
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-medium">
                    <i className="fas fa-envelope me-2 text-primary"></i>
                    Email Address
                  </label>
                  <input
                    type="email"
                    className={`form-control border-0 bg-light rounded-3 ${
                      errors.email ? 'is-invalid' : ''
                    }`}
                    id="email"
                    placeholder="Enter your email..."
                    name="email"
                    onChange={onChange}
                    required
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-medium">
                    <i className="fas fa-lock me-2 text-primary"></i>
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control border-0 bg-light rounded-3 ${
                      errors.password ? 'is-invalid' : ''
                    }`}
                    id="password"
                    placeholder="Enter your password..."
                    name="password"
                    onChange={onChange}
                    minLength={5}
                    required
                    autoComplete="new-password"
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                <div className="mb-4">
                  <label htmlFor="cpassword" className="form-label fw-medium">
                    <i className="fas fa-lock me-2 text-primary"></i>
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className={`form-control border-0 bg-light rounded-3 ${
                      errors.cpassword ? 'is-invalid' : ''
                    }`}
                    id="cpassword"
                    placeholder="Confirm your password..."
                    name="cpassword"
                    onChange={onChange}
                    minLength={5}
                    required
                    autoComplete="new-password"
                  />
                  {errors.cpassword && <div className="invalid-feedback">{errors.cpassword}</div>}
                </div>

                <div className="mb-4">
                  <button
                    type="submit"
                    className="btn btn-modern w-100"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <i className="fas fa-spinner fa-spin me-2"></i>
                        Creating Account...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-user-plus me-2"></i>
                        Create Account
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-muted mb-0">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary text-decoration-none fw-medium">
                      Sign in here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

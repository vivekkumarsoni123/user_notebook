import React from "react";
import { useState } from "react";
<<<<<<< HEAD
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
=======
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    setIsLoading(true);

    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const json = await response.json();
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        navigate("/home");
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
=======

    const response = await fetch(`https://user-notebook-2.onrender.com/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    if (json.success) {
      // Redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/"); // Use navigate instead of history.push
    } else {
      alert("Invalid Credentials");
    }
    console.log(json);
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
<<<<<<< HEAD
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7 col-sm-9">
          <div className="card card-modern">
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <div className="mb-3">
                  <i className="fas fa-user-circle fa-4x text-primary"></i>
                </div>
                <h2 className="gradient-text fw-bold mb-2">Welcome Back!</h2>
                <p className="text-muted">Sign in to your E-notebook account</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-medium">
                    <i className="fas fa-envelope me-2 text-primary"></i>
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control border-0 bg-light rounded-3"
                    id="email"
                    placeholder="Enter your email..."
                    value={credentials.email}
                    name="email"
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-medium">
                    <i className="fas fa-lock me-2 text-primary"></i>
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control border-0 bg-light rounded-3"
                    id="password"
                    placeholder="Enter your password..."
                    value={credentials.password}
                    name="password"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
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
                        Signing In...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-sign-in-alt me-2"></i>
                        Sign In
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-muted mb-0">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-primary text-decoration-none fw-medium">
                      Sign up here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
=======
    <div>
      <div className="mt-3">
        <h2>Login to continue to iNoteBook</h2>
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={credentials.email}
              name="email"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={credentials.password}
              name="password"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
      </div>
    </div>
  );
};

export default Login;

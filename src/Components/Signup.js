import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });

      let navigate = useNavigate();
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const {name,email,password} = credentials;
    
        const response = await fetch(`https://user-notebook-2.onrender.com/api/auth/createuser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name,email, password }),
        });   
    
        const json = await response.json();
        if (json.success) {
          // Redirect
          localStorage.setItem("token", json.authtoken);
          navigate("/"); // Use navigate instead of history.push
        }
      };
    
      const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
    
      return (
        <div className='mt-2'>
          <h2>Signup to continue to iNoteBook</h2>

          <form onSubmit={handleSubmit}>
          <div className="my-3">
              <label htmlFor="password" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                // value={credentials.password}
                name="name"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                // value={credentials.email}
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
                // value={credentials.password}
                name="password"
                onChange={onChange}
                minLength={5} required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cpassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="cpassword"
                // value={credentials.password}
                name="cpassword"
                onChange={onChange}
                minLength={5} required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
  );
};


export default Signup;

import React from "react";
import Notes from "./Notes";

const Home = () => {
  return (
    <div className="container-fluid py-4">
      {/* Hero Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8 text-center fade-in">
          <div className="glass-effect p-5 rounded-4 shadow-custom">
            <h1 className="gradient-text display-5 fw-bold mb-3">
              <i className="fas fa-sticky-note me-3"></i>
              Your Digital Notebook
            </h1>
            <p className="lead text-dark mb-4">
              Capture your thoughts, ideas, and memories in one beautiful, organized place
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <div className="d-flex align-items-center text-dark">
                <i className="fas fa-check-circle text-success me-2"></i>
                <span>Secure & Private</span>
              </div>
              <div className="d-flex align-items-center text-dark">
                <i className="fas fa-check-circle text-success me-2"></i>
                <span>Real-time Sync</span>
              </div>
              <div className="d-flex align-items-center text-dark">
                <i className="fas fa-check-circle text-success me-2"></i>
                <span>Cross-Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <Notes />
        </div>
      </div>
    </div>
  );
};
  
export default Home;

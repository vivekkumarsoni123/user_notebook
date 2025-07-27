<<<<<<< HEAD
import React from 'react';

const About = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Hero Section */}
          <div className="text-center mb-5 fade-in">
            <h1 className="gradient-text display-4 fw-bold mb-4">
              <i className="fas fa-book-open me-3"></i>
              Welcome to E-notebook
            </h1>
            <p className="lead text-dark fs-5 mb-4">
              Your personal digital notebook for capturing ideas, thoughts, and memories
            </p>
            <div className="glass-effect p-4 rounded-4 shadow-custom">
              <p className="text-dark mb-0">
                Experience the future of note-taking with our intuitive, secure, and feature-rich platform
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="row g-4 mb-5">
            <div className="col-md-4 slide-in">
              <div className="card card-modern h-100 text-center p-4">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="fas fa-shield-alt fa-3x text-primary"></i>
                  </div>
                  <h5 className="card-title fw-bold mb-3">Secure & Private</h5>
                  <p className="card-text">
                    Your notes are encrypted and stored securely. Your privacy is our top priority.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 slide-in">
              <div className="card card-modern h-100 text-center p-4">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="fas fa-mobile-alt fa-3x text-primary"></i>
                  </div>
                  <h5 className="card-title fw-bold mb-3">Cross-Platform</h5>
                  <p className="card-text">
                    Access your notes from anywhere - desktop, tablet, or mobile device.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 slide-in">
              <div className="card card-modern h-100 text-center p-4">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="fas fa-sync fa-3x text-primary"></i>
                  </div>
                  <h5 className="card-title fw-bold mb-3">Real-time Sync</h5>
                  <p className="card-text">
                    Your notes sync automatically across all your devices in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="row g-4 mb-5">
            <div className="col-12">
              <div className="glass-effect p-5 rounded-4 shadow-custom text-center">
                <h3 className="gradient-text fw-bold mb-4">Why Choose E-notebook?</h3>
                <div className="row g-4">
                  <div className="col-md-3">
                    <div className="text-center">
                      <div className="display-6 fw-bold text-dark mb-2">10K+</div>
                      <div className="text-muted">Active Users</div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <div className="display-6 fw-bold text-dark mb-2">1M+</div>
                      <div className="text-muted">Notes Created</div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <div className="display-6 fw-bold text-dark mb-2">99.9%</div>
                      <div className="text-muted">Uptime</div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <div className="display-6 fw-bold text-dark mb-2">24/7</div>
                      <div className="text-muted">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="row g-4 mb-5">
            <div className="col-lg-6">
              <div className="card card-modern h-100">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-3">
                    <i className="fas fa-edit text-primary me-2"></i>
                    Rich Text Editor
                  </h4>
                  <p className="card-text">
                    Create beautiful notes with our rich text editor. Format text, add lists, and organize your thoughts with ease.
                  </p>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-success me-2"></i>Bold, italic, and underline formatting</li>
                    <li><i className="fas fa-check text-success me-2"></i>Bullet points and numbered lists</li>
                    <li><i className="fas fa-check text-success me-2"></i>Text alignment options</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card card-modern h-100">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-3">
                    <i className="fas fa-search text-primary me-2"></i>
                    Smart Search
                  </h4>
                  <p className="card-text">
                    Find your notes instantly with our powerful search functionality. Search by title, content, or tags.
                  </p>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-success me-2"></i>Instant search results</li>
                    <li><i className="fas fa-check text-success me-2"></i>Search within note content</li>
                    <li><i className="fas fa-check text-success me-2"></i>Filter by date and tags</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="row g-4 mb-5">
            <div className="col-12">
              <div className="card card-modern">
                <div className="card-body p-5 text-center">
                  <h3 className="gradient-text fw-bold mb-4">Our Mission</h3>
                  <p className="lead mb-4">
                    We believe that everyone deserves a simple, beautiful, and secure way to capture their thoughts and ideas. 
                    E-notebook is designed to help you focus on what matters most - your creativity and productivity.
                  </p>
                  <div className="row g-4 mt-4">
                    <div className="col-md-4">
                      <div className="text-center">
                        <i className="fas fa-lightbulb fa-2x text-warning mb-3"></i>
                        <h5 className="fw-bold">Innovation</h5>
                        <p className="text-muted">Constantly improving our platform with cutting-edge features</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <i className="fas fa-heart fa-2x text-danger mb-3"></i>
                        <h5 className="fw-bold">User-First</h5>
                        <p className="text-muted">Every feature is designed with our users in mind</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <i className="fas fa-rocket fa-2x text-info mb-3"></i>
                        <h5 className="fw-bold">Performance</h5>
                        <p className="text-muted">Lightning-fast performance for seamless note-taking</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="glass-effect p-5 rounded-4 shadow-custom">
              <h3 className="gradient-text fw-bold mb-4">Ready to Get Started?</h3>
              <p className="text-dark mb-4">
                Join thousands of users who trust E-notebook for their note-taking needs.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-modern btn-lg">
                  <i className="fas fa-user-plus me-2"></i>
                  Sign Up Free
                </button>
                <button className="btn btn-outline-dark btn-lg">
                  <i className="fas fa-play me-2"></i>
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
=======
import React from 'react'   //just write <rafce> to get the format of the page
// import noteContext from '../Context/notes/noteContext'

const About = ()=> {
  // const a = useContext(noteContext);
  // useEffect(()=>{
  //   a.update();
  //   // eslint-disable-next-line
  // }, [])
  return (
    <div>
      {/* {a.state.name} */}
      <h1>This is About page</h1> 
    </div>
  )
}
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44

export default About;

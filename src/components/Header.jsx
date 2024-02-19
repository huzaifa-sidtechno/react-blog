import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('userToken');

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear(); 
    navigate('/login'); 
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid justify-content-between">
        <Link className="navbar-brand" to="/">Blog</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            {token ? (
              // If token exists (user is logged in), show the "Create Blog" and "Logout" links
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog-post">Create Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout" onClick={handleLogout}>Logout</Link>
                </li>
              </>
            ) : (
              // If no token (user is not logged in), show the "Login" and "Signup" links
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login" >Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

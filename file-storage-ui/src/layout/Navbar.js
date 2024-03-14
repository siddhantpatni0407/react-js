import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className={isDarkMode ? 'navbar navbar-expand-lg navbar-dark bg-dark' : 'navbar navbar-expand-lg navbar-light bg-light'}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          File Storage System
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
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <Form.Check
              type="switch"
              id="theme-switch"
              label={isDarkMode ? 'Dark' : 'Light'}
              checked={isDarkMode}
              onChange={handleThemeChange}
            />
            <Link className={isDarkMode ? 'btn btn-outline-light ms-2' : 'btn btn-outline-primary ms-2'} to="/addFile">
              Upload File
            </Link>
            <button className={isDarkMode ? 'btn btn-outline-light ms-2' : 'btn btn-outline-primary ms-2'} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

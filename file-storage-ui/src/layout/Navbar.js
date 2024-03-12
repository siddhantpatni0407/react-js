import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <div className="links-container">
        <Link className="navbar-brand" to={"/"}>
          File Storage System
        </Link>
        <Link className="navbar-brand" to={"/about"}>
          About
        </Link>
      </div>
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
      <Link className="btn btn-outline-light" to="/addFile">
        Upload File
      </Link>
    </div>
    </nav>
    </div>
  );
};

export default Navbar;

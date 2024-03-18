// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="left-navbar">
      <ul>
        <li>
          <Link to="/server">Server Management</Link>
        </li>
        <li>
          <Link to="/topic">Topic Management</Link>
        </li>
        <li>
          <Link to="/message">Message Sender</Link>
        </li>
        <li>
          <Link to="/event">Event Sender</Link>
        </li>
        <li>
          <Link to="/log">Log Deleter</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

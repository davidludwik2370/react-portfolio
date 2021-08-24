import React from 'react';
import './pages/pageAssets/css/style.css';

//navigation tab component
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav>
    <span className="name">
      David Ludwik
    </span>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="pageLink"
          href="#home"
          onClick={() => handlePageChange('About')}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a className="pageLink"
          href="#about"
          onClick={() => handlePageChange('Portfolio')}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a className="pageLink"
          href="#blog"
          onClick={() => handlePageChange('Contact')}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a className="pageLink"
          href="#contact"
          onClick={() => handlePageChange('Resume')}
        >
          Resume
        </a>
      </li>
    </ul>
    </nav>
  );
}

export default NavTabs;

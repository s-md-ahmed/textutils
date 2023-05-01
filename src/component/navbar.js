import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const toggleText = props.mode === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode';
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch text-light">
            <input
              className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={props.mode === 'dark'} onChange={props.toggleMode}/>
            <label className={`form-check-label ${props.mode === 'light' ? 'text-dark' : 'text-light'}`} htmlFor="flexSwitchCheckDefault" onClick={props.toggleMode}>{toggleText}</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Set title here',
  home: 'Home',
  abouttext: 'About',
};


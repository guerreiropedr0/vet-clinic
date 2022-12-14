import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link to="/" className="btn btn-link navbar-brand d-flex align-items-center gap-2">
          <img src={logo} alt="Logo" width="64" height="64" />
          Dolittle Centre
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className="btn btn-link nav-link"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/owners"
                className="btn btn-link nav-link"
              >
                Owners
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/vets"
                className="btn btn-link nav-link"
              >
                Vets
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

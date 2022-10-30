import React from 'react';
import logo from '../../assets/logo.svg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button type="button" className="btn btn-link navbar-brand d-flex align-items-center gap-2">
          <img src={logo} alt="Logo" width="64" height="64" />
          Vet Clinic
        </button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button type="button" className="btn btn-link nav-link active" aria-current="page" href="#">Home</button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-link nav-link" href="#">Owners</button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-link nav-link" href="#">Vets</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

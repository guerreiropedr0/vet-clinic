import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function Home() {
  return (
    <main className="container-fluid py-3 d-flex flex-column align-items-center gap-3">
      <div className="d-flex flex-column align-items-center">
        <h1>Dolittle Centre</h1>
        <img src={logo} alt="Logo" width="128" height="128" />
      </div>
      <h2>Why us?</h2>
      <div className="row gap-3 container">

        <div className="col-sm d-flex flex-column align-items-center p-3 border rounded bg-white">
          <h3>Veterinarians</h3>
          <ul className="d-flex flex-column gap-1">
            <li>Graduated and experienced</li>
            <li>Passion for the job and the animals</li>
            <li>Every veterinarian is specialized in a species</li>
            <li>Veterinarians are being teached by Doctor Dolittle</li>
            <li>Most vets can talk to animals!</li>
          </ul>
          <p>Not convinced? See it for yourself.</p>
          <Link to="/vets" className="btn btn-primary">Check our Vets</Link>
        </div>

        <div className="col-sm d-flex flex-column align-items-center p-3 border rounded bg-white">
          <h3>Environment</h3>
          <ul className="d-flex flex-column gap-1">
            <li>All animals are welcome (and we mean all)</li>
            <li>Rooms for animals to play and sleep</li>
            <li>Excellent service (99% positive reviews)</li>
            <li>Some animals are part of the medical team</li>
          </ul>
        </div>

        <div className="col-sm d-flex flex-column align-items-center p-3 border rounded bg-white">
          <h3>Animals and owners</h3>
          <ul className="d-flex flex-column gap-1">
            <li>We keep all visits registered in a secure database</li>
            <li>Owners can bring multiple animals</li>
            <li>Owners can enlist animals in a medical course</li>
          </ul>
          <p>See the community built in Dolittle Centre.</p>
          <Link to="/owners" className="btn btn-primary">View community</Link>
        </div>
      </div>
    </main>
  );
}

export default Home;

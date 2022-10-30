import React from 'react';
import logo from '../../assets/logo.svg';

const homeStyle = {
  height: '100%',
  minHeight: 'calc(100vh - 93px - 81px)',
};

function Home() {
  return (
    <main style={homeStyle} className="container-fluid py-3 d-flex flex-column align-items-center gap-3 bg-light">
      <div className="d-flex flex-column align-items-center">
        <h1>Dolittle Centre</h1>
        <img src={logo} alt="Logo" width="128" height="128" />
      </div>
      <h2>Why us?</h2>
      <div className="row gap-3">

        <div className="col d-flex flex-column align-items-center p-3 border rounded">
          <h3>Veterinarians</h3>
          <ul className="d-flex flex-column gap-1">
            <li>Graduated and experienced</li>
            <li>Passion for the job and the animals</li>
            <li>Every veterinarian is specialized in a species</li>
            <li>Veterinarians are being teached by Doctor Dolittle</li>
            <li>Most vets can talk to animals!</li>
          </ul>
          <p>Not convinced? See it for yourself.</p>
          <button type="button" className="btn btn-primary">Check our Vets</button>
        </div>

        <div className="col d-flex flex-column align-items-center p-3 border rounded">
          <h3>Environment</h3>
          <ul className="d-flex flex-column gap-1">
            <li>All animals are welcome (and we mean all)</li>
            <li>Rooms for animals to play and sleep</li>
            <li>Excellent service (99% positive reviews)</li>
            <li>Some animals are part of the medical team</li>
          </ul>
        </div>

        <div className="col d-flex flex-column align-items-center p-3 border rounded">
          <h3>Animals and owners</h3>
          <ul className="d-flex flex-column gap-1">
            <li>We keep all visits registered in a secure database</li>
            <li>Owners can bring multiple animals</li>
            <li>Owners can enlist animals in a medical course</li>
          </ul>
          <p>See the community built in Dolittle Centre.</p>
          <button type="button" className="btn btn-primary">View community</button>
        </div>
      </div>
    </main>
  );
}

export default Home;

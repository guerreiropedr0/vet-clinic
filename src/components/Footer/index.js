import React from 'react';
import logo from '../../assets/logo.svg';

function Footer() {
  return (
    <div className="fixed-bottom bg-dark text-white p-3 d-flex justify-content-between align-items-end border-top">
      <img src={logo} alt="Logo" width="48" height="48" />
      <p>
        Created by&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/guerreiropedr0"
          className="link-light"
        >
          @guerreiropedr0
        </a>
      </p>
    </div>
  );
}

export default Footer;

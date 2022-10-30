/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOwner } from '../../app/owners';

function OwnerForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (event, callback) => {
    event.preventDefault();
    callback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const owner = { name, age, email };

    dispatch(createOwner(owner));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-3">
      <div className="mb-3">
        <label htmlFor="full_name" className="form-label">Full Name</label>
        <input
          onChange={(e) => handleChange(e, setName)}
          value={name}
          className="form-control"
          id="full_name"
          type="text"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input
          onChange={(e) => handleChange(e, setAge)}
          value={age}
          className="form-control"
          id="age"
          type="number"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          onChange={(e) => handleChange(e, setEmail)}
          value={email}
          className="form-control"
          id="email"
          type="email"
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default OwnerForm;

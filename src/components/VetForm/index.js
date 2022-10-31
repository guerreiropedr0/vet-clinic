/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createVet } from '../../app/vets';

function VetForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [graduationDate, setGraduationDate] = useState('');

  const handleChange = ({ target }, callback) => {
    callback(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const vet = { name, age, graduation_date: graduationDate };

    dispatch(createVet(vet));
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
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="graduation_date" className="form-label">Graduation Date</label>
        <input
          onChange={(e) => handleChange(e, setGraduationDate)}
          value={graduationDate}
          className="form-control"
          id="graduation_date"
          type="date"
          max={new Date().toISOString().split('T')[0]}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default VetForm;

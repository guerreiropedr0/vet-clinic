/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function VetForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [graduationDate, setGraduationDate] = useState('');

  const handleChange = (event, callback) => {
    event.preventDefault();
    callback(event.target.value);
  };

  return (
    <form>
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

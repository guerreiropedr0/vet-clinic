/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createOwnerAnimal } from '../../app/owners';

function OwnerAnimalForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [neutered, setNeutered] = useState(false);
  const ownerId = useParams().id;

  const handleChange = ({ target }, callback) => (target.name === 'neutered' ? callback(target.checked) : callback(target.value));

  const handleNeutered = (event) => {
    setNeutered(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const animal = {
      name,
      birth_date: birthDate,
      neutered,
      weight_kg: weightKg,
      owner_id: ownerId,
      species_id: 9,
    };

    dispatch(createOwnerAnimal(animal));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-3">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          onChange={(e) => handleChange(e, setName)}
          value={name}
          className="form-control"
          id="name"
          type="text"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="birth_date" className="form-label">Birth Date</label>
        <input
          onChange={(e) => handleChange(e, setBirthDate)}
          value={birthDate}
          className="form-control"
          id="birth_date"
          type="date"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="weight_kg" className="form-label">Weight (kg)</label>
        <input
          onChange={(e) => handleChange(e, setWeightKg)}
          value={weightKg}
          className="form-control"
          id="name"
          type="number"
          required
        />
      </div>
      <div className="mb-3">
        <input
          onChange={handleNeutered}
          checked={neutered}
          className="form-check-input"
          id="neutered"
          type="checkbox"
        />
        <label htmlFor="neutered" className="form-check-label">Neutered</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default OwnerAnimalForm;

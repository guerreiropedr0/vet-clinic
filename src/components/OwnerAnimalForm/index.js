/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createOwnerAnimal } from '../../app/owners';
import { fetchSpecies } from '../../app/species';

function OwnerAnimalForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [neutered, setNeutered] = useState(false);
  const [species, setSpecies] = useState('');
  const ownerId = useParams().id;
  const allSpecies = useSelector((state) => state.species.all);

  const handleChange = ({ target }, callback) => (target.name === 'neutered' ? callback(target.checked) : callback(target.value));

  const handleSubmit = (event) => {
    event.preventDefault();
    const animal = {
      name,
      birth_date: birthDate,
      neutered,
      weight_kg: weightKg,
      owner_id: ownerId,
      species_id: species,
    };

    dispatch(createOwnerAnimal(animal));
    navigate('/');
  };

  useEffect(() => {
    dispatch(fetchSpecies());
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit} className="container mt-3">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          name="name"
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
          name="birthDate"
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
          name="weightKg"
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
          name="neutered"
          onChange={(e) => handleChange(e, setNeutered)}
          checked={neutered}
          className="form-check-input"
          id="neutered"
          type="checkbox"
        />
        <label htmlFor="neutered" className="form-check-label ms-1">Neutered</label>
      </div>
      <select
        value={species}
        onChange={(e) => handleChange(e, setSpecies)}
        className="form-select mb-3"
        required
      >
        <option value="" disabled>Choose a species</option>
        {allSpecies.map((species) => (
          <option
            key={species.id}
            value={species.id}
          >
            {species.name}
          </option>
        ))}
      </select>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default OwnerAnimalForm;

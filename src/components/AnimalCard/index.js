import React from 'react';
import PropTypes from 'prop-types';
import placeholder from '../../assets/placeholder.webp';

function AnimalCard({ props }) {
  const animal = props;

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={placeholder} className="card-img-top" alt="Avatar placeholder" />
      <div className="card-body">
        <h5 className="card-title">{animal.name}</h5>
        <ul>
          <li>
            Birth Date:
            {' '}
            <span className="badge bg-secondary">
              {animal.birth_date}
            </span>
          </li>
          <li>
            Neutered:
            {' '}
            <span className="badge bg-secondary">
              {animal.neutered ? 'Yes' : 'No'}
            </span>
          </li>
          <li>
            Weight (kg):
            {' '}
            <span className="badge bg-secondary">
              {animal.weight_kg}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

AnimalCard.propTypes = {
  props: PropTypes.shape({
    birth_date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    neutered: PropTypes.bool.isRequired,
    weight_kg: PropTypes.string.isRequired,
    owner_id: PropTypes.number,
    species_id: PropTypes.number,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
};

export default AnimalCard;

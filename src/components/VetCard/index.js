import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import placeholder from '../../assets/placeholder.webp';

function VetCard({ props }) {
  const vet = props;

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={placeholder} className="card-img-top" alt="Avatar placeholder" />
      <div className="card-body">
        <h5 className="card-title">{vet.name}</h5>
        <ul>
          <li>
            Age:
            {' '}
            <span className="badge bg-secondary">{vet.age}</span>
          </li>
          <li>
            Graduation date:
            {' '}
            <span className="badge bg-secondary">{vet.graduation_date}</span>
          </li>
        </ul>
        <Link to={`/vets/${vet.id}`} className="btn btn-info text-white">More information</Link>
      </div>
    </div>
  );
}

VetCard.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    graduation_date: PropTypes.string.isRequired,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
};

export default VetCard;

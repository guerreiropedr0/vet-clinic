import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import placeholder from '../../assets/placeholder.webp';

function OwnerCard({ props }) {
  const owner = props;

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={placeholder} className="card-img-top" alt="Avatar placeholder" />
      <div className="card-body">
        <h5 className="card-title">{owner.name}</h5>
        <ul>
          <li>
            Age:
            {' '}
            <span className="badge bg-secondary">
              {owner.age ? owner.age : 'Not Specified'}
            </span>
          </li>
          <li>
            Email:
            {' '}
            <span className="badge bg-secondary">
              {owner.email ? owner.email : 'Not Specified'}
            </span>
          </li>
        </ul>
        <Link to={`/owners/${owner.id}`} className="btn btn-info text-white">More information</Link>
      </div>
    </div>
  );
}

OwnerCard.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.number.isRequired,
    age: PropTypes.number,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
};

export default OwnerCard;

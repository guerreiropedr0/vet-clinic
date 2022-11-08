import React from 'react';
import PropTypes from 'prop-types';
import AnimalCard from '../AnimalCard';

function OwnerAnimals({ props }) {
  const ownerAnimals = props;

  return (
    <div className="container d-flex justify-content-center flex-wrap gap-3">
      {ownerAnimals
        ? ownerAnimals.map((animal) => (
          <AnimalCard key={animal.id} props={animal} />))
        : null}
    </div>
  );
}

OwnerAnimals.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape(
      {
        birth_date: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        neutered: PropTypes.bool.isRequired,
        weight_kg: PropTypes.string.isRequired,
        owner_id: PropTypes.number,
        species_id: PropTypes.number,
        created_at: PropTypes.string,
        updated_at: PropTypes.string,
      },
    ),
  ),
};

OwnerAnimals.defaultProps = [];

export default OwnerAnimals;

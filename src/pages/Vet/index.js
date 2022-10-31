import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchVet } from '../../app/vets';
import placeholder from '../../assets/placeholder.webp';
import ternaryFunc from '../../helper';

function Vet() {
  const currentVet = useSelector((state) => state.vets.current);
  const dispatch = useDispatch();
  const vetId = useParams().id;

  useEffect(() => {
    dispatch(fetchVet(vetId));
  }, [dispatch, vetId]);

  return (
    <div className="container-fluid d-flex justify-content-center py-3">
      <div className="card" style={{ width: '20rem' }}>
        <img src={placeholder} className="card-img-top" alt="Avatar placeholder" />
        <div className="card-body">
          <h5 className="card-title">{currentVet.name}</h5>
          <ul>
            <li>
              Age:
              {' '}
              <span className="badge bg-secondary">{currentVet.age}</span>
            </li>
            <li>
              Graduation date:
              {' '}
              <span className="badge bg-secondary">{currentVet.graduation_date}</span>
            </li>
            <li>
              Specialization:
              {' '}
              <div className="d-inline-flex gap-1">
                {currentVet.species
                  ? ternaryFunc(
                    currentVet.species.length,
                    currentVet.species.map((species) => (
                      <span
                        key={species.id}
                        className="badge bg-secondary"
                      >
                        {species.name}
                      </span>
                    )),
                    <span className="badge bg-secondary">None</span>,
                  )
                  : null}
              </div>
            </li>
          </ul>
          <Link to={`/vets/${vetId}/visits`} className="btn btn-primary">All Visits</Link>
        </div>
      </div>
    </div>
  );
}

export default Vet;

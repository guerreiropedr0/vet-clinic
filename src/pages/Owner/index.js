import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchOwner } from '../../app/owners';
import placeholder from '../../assets/placeholder.webp';
import OwnerAnimals from '../../components/OwnerAnimals';

function Owner() {
  const currentOwner = useSelector((state) => state.owners.current);
  const dispatch = useDispatch();
  const ownerId = useParams().id;

  useEffect(() => {
    dispatch(fetchOwner(ownerId));
  }, [dispatch, ownerId]);

  return (
    <div className="container-fluid d-flex py-3 align-items-center">
      <Link className="align-self-end btn btn-primary" to="animals/new">New Animal</Link>
      <div className="card" style={{ width: '20rem' }}>
        <img src={placeholder} className="card-img-top" alt="Avatar placeholder" />
        <div className="card-body">
          <h5 className="card-title">{currentOwner.name}</h5>
          <ul>
            <li>
              Age:
              {' '}
              <span className="badge bg-secondary">
                {currentOwner.age ? currentOwner.age : 'Not Specified'}
              </span>
            </li>
            <li>
              Email:
              {' '}
              <span className="badge bg-secondary">
                {currentOwner.email ? currentOwner.email : 'Not Specified'}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <OwnerAnimals props={currentOwner.animals} />
    </div>
  );
}

export default Owner;

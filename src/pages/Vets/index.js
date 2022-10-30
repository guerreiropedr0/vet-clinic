import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchVets } from '../../app/vets';
import VetCard from '../../components/VetCard';

function Vets() {
  const allVets = useSelector((state) => state.vets.all);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVets());
  }, [dispatch]);

  return (
    <div className="container-fluid py-3 bg-light d-flex flex-column gap-3">
      <Link className="align-self-end btn btn-primary" to="/vets/new">New Vet</Link>
      <section className=" d-flex flex-wrap justify-content-center gap-5">
        {allVets.map((vet) => <VetCard key={vet.id} props={vet} />)}
      </section>
    </div>
  );
}

export default Vets;

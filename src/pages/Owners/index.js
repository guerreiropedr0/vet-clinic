import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOwners } from '../../app/owners';
import OwnerCard from '../../components/OwnerCard';

function Owners() {
  const allOwners = useSelector((state) => state.owners.all);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOwners());
  }, [dispatch]);

  return (
    <div className="container-fluid py-3 bg-light d-flex flex-column gap-3">
      <Link className="align-self-end btn btn-primary" to="/owners/new">New Owner</Link>
      <section className=" d-flex flex-wrap justify-content-center gap-5">
        {allOwners.map((owner) => <OwnerCard key={owner.id} props={owner} />)}
      </section>
    </div>
  );
}

export default Owners;

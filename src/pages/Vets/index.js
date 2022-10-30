import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVets } from '../../app/vets';
import Vet from '../../components/Vet';

function Vets() {
  const allVets = useSelector((state) => state.vets.all);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVets());
  }, [dispatch]);

  return (
    <div className="container-fluid d-flex flex-wrap justify-content-center gap-3 mt-3">
      {allVets.map((vet) => <Vet key={vet.id} props={vet} />)}
    </div>
  );
}

export default Vets;

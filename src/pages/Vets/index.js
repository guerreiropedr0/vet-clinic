import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVets } from '../../app/vets';

function Vets() {
  const allVets = useSelector((state) => state.vets.all);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVets());
  }, [dispatch]);

  console.log(allVets);

  return (
    <div>Vets</div>
  );
}

export default Vets;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProperties } from '../redux/store/propertySlice';

const HomeDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const property = useSelector((state) => state.indexOfProperties.properties
    .find((property) => property.id === +params.id));

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);

  if (!property) {
    return (<h1>Create a property first</h1>);
  }
  return (
    <img key={property.images.id} src={property.images[2]} alt="ok" />
  );
};

export default HomeDetails;

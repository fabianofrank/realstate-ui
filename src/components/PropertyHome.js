import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProperties } from '../redux/store/propertySlice';

const Home = () => {
  const properties = useSelector((state) => state.indexOfProperties.properties);
  console.log(properties);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProperties());
  }, []);

  if (properties.length === 0) {
    return (
      <div>home</div>
    );
  }
  return (
    <div>
      {
        properties.map((property) => (
          <div key={property.id}>
            <p>{property.name}</p>
            <div>
              {
              property.images.map((image) => (
                <img key={property.images.id} src={image} alt="ok" />
              ))
              }
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Home;

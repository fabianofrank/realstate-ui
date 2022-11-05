import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProperties } from '../redux/store/propertySlice';
import Carousel from './ImagesCarousel';

const Home = () => {
  const properties = useSelector((state) => state.indexOfProperties.properties);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProperties());
  }, []);

  const formatter = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  if (properties.length === 0) {
    return (
      <div>
        <Link to="create" />
      </div>
    );
  }
  return (
    <div>
      {
        properties.map((property) => (
          <div key={property.id}>
            <Carousel props={property.images} />
            <Link to={`details/${property.id}`}>
              <p>{property.city}</p>
              <p>{property.address}</p>
              <p>{property.bed}</p>
              <p>{property.bath}</p>
              <div>
                <div>
                  <img src="https://tabas.com/packs/media/images/react_icons/best_deal-4851150a4ae6bdaf06f62e1322fc8706.svg" alt="dollar sign" />
                  <div>
                    <p>Best Deal</p>
                    <p>{formatter.format(Date.parse(property.created_at))}</p>
                  </div>
                </div>
                <p>{0.98 * property.size}</p>
              </div>

              <div>
                <p>{property.size}</p>
                <p>{formatter.format(Date.parse(property.created_at))}</p>
              </div>
            </Link>

          </div>
        ))
      }
    </div>
  );
};

export default Home;

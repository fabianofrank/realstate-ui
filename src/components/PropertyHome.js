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
  }, [dispatch]);

  const formatter = new Intl.DateTimeFormat('en-GB', {
    month: 'short',
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
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-5">
      {
        properties.map((property) => (
          <div className="bg-gray-100 max-h-[520px] max-w-[540px] rounded-md shadow" key={property.id}>
            <Carousel props={property} />
            <Link to={`details/${property.id}`}>
              <div className="px-5 pb-3 space-y-1">
                <p className="font-light text-sm">{property.city}</p>
                <p className="font-semibold">{property.address}</p>
                <p className="text-xs">
                  {property.bed}
                  {' '}
                  bedroom •
                  {' '}
                  {property.bath}
                  {' '}
                  bathroom
                </p>
                <div className="flex border border-green-400 p-1 mt-3 rounded justify-between items-center max-h-[60px]">
                  <div className="flex space-x-1 p-1">
                    <img src="https://tabas.com/packs/media/images/react_icons/best_deal-4851150a4ae6bdaf06f62e1322fc8706.svg" alt="dollar sign" />
                    <div>
                      <p className="font-semibold text-xs text-green-800">Best Deal</p>
                      <p className="text-xs">{formatter.format(Date.parse(property.created_at))}</p>
                    </div>
                  </div>
                  <div className="flex items-baseline">
                    <p className="font-medium">
                      R$
                      {' '}
                      {0.98 * property.size}
                    </p>
                    <p className="text-xs">/mo</p>
                  </div>
                </div>

                <div className="flex justify-between pt-6 items-center">
                  <div className="flex items-baseline">
                    <p className="text-xl font-medium">
                      R$
                      {' '}
                      {property.size}
                    </p>
                    <p className="text-xs">/mo</p>
                  </div>
                  <div className="bg-gray-300 p-2 rounded-full flex space-x-1 items-center shadow-sm">
                    <p className="font-medium text-sm">
                      Available

                    </p>
                    <p className="font-light text-sm">

                      {formatter.format(Date.parse(property.created_at))}
                    </p>
                  </div>
                </div>
              </div>

            </Link>
          </div>
        ))
      }
    </div>
  );
};

export default Home;

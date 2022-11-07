import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProperties, deleteProperty } from '../redux/store/propertySlice';

const HomeDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const property = useSelector((state) => state.indexOfProperties.properties
    .find((property) => property.id === +params.id));

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);

  const formatter = new Intl.DateTimeFormat('en-GB', {
    month: 'short',
    day: '2-digit',
  });

  if (!property) {
    return (<h1 className="flex justify-center items-center text-5xl w-full h-full bg-gray-100 absolute">Create a property first</h1>);
  }
  return (
    <div className="flex flex-col">
      <div className="relative justify-center flex">
        <img className="w-full object-cover h-[600px] brightness-75" key={property.images.id} src={property.images[2]} alt="ok" />

        <div className="absolute bottom-0 p-5 w-[1280px]">
          <div className="flex space-x-3 p-5 items-center">
            <div className="bg-gray-100 p-2 rounded-full flex space-x-1 items-center shadow-sm">
              <p className="font-medium text-sm">
                IT00
                {Math.floor(Math.random(property.id) * 1000)}
              </p>
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

          <div className="px-5 pb-3 space-y-1">
            <p className="font-bold text-xl text-gray-200 opacity-80">{property.city}</p>
            <p className="font-bold text-3xl text-gray-100">{property.address}</p>

            <div className="flex space-x-2">
              <div className="flex items-middle space-x-1">
                <img alt="bed" src="https://tabas.com/packs/media/images/react_icons/property/bed-b433b38bf07405f897c1f1dce71198ab.svg" />
                <p className="text-xs text-gray-100 font-medium">
                  {property.bed}
                  {' '}
                  Beds
                </p>
              </div>
              <div className="flex items-middle space-x-1">
                <img alt="bath" src="https://tabas.com/packs/media/images/react_icons/property/bath-834662f3fb242680febe84593f769a54.svg" />
                <p className="text-xs text-gray-100 font-medium">
                  {property.bath}
                  {' '}
                  Baths
                </p>
              </div>
              <div className="flex items-middle space-x-1">
                <img alt="size" src="https://tabas.com/packs/media/images/react_icons/property/house-cf6a549cfe977611d9d3c7ced65c33af.svg" />
                <p className="text-xs text-gray-100 font-medium">
                  {property.size}
                  {' '}
                  sqm
                </p>
              </div>
              <div className="flex items-middle space-x-1">
                <img alt="parking-slots" src="https://tabas.com/packs/media/images/react_icons/property/parking_light-c065fc341f0e0a0af6f24fd66547e30b.svg" />
                <p className="text-xs text-gray-100 font-medium">
                  {property.parking}
                  {' '}
                  Parking Slot
                </p>
              </div>
            </div>

            <div className="flex pt-6 items-center space-x-2">
              <div className="bg-gray-100 p-2 rounded-full flex space-x-1 items-center shadow-sm">
                <img alt="3d" src="https://tabas.com/packs/media/images/react_icons/property/3dtour-805072009f0144aafd7f751770c14f41.svg" />
                <p className="font-light text-xs">
                  3D Tour
                </p>
              </div>
              <div className="bg-gray-100 p-2 rounded-full flex space-x-1 items-center shadow-sm">
                <img alt="3d" src="https://tabas.com/packs/media/images/react_icons/property/gallery-2639b40c8073e8b847b20584c464ba04.svg" />
                <p className="font-light text-xs">
                  Galery
                </p>
              </div>
              <div className="bg-gray-100 p-2 rounded-full flex space-x-1 items-center shadow-sm">
                <img alt="3d" src="https://tabas.com/packs/media/images/react_icons/property/map-6f562245e5e603432468cf4a86e40311.svg" />
                <p className="font-light text-xs">
                  Map Position
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="p-5 flex flex-col justify-between w-[1280px]">
          <h2 className="font-bold text-xl">Description</h2>
          <p>{property.description}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="absolute bottom-0 flex justify-end w-[1320px]">
          <button className="p-5 bg-gray-900 text-gray-100 font-semibold w-48 rounded-full m-5" type="button" onClick={() => dispatch(deleteProperty(property.id))}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;

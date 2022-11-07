import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const properties = useSelector((state) => state.indexOfProperties.properties);
  const navigate = useNavigate();

  const routeChange = () => {
    navigate('create');
  };

  if (properties.length > 50) {
    return (
      <div className="flex flex-col">
        <div className="flex justify-center bg-gray-100">
          <div className="flex justify-between items-center w-[1320px]">
            <Link to="/">
              <img className="w-48 px-1" alt="home" src="https://tabas.com/packs/media/images/logo-dark-e153277a7756ce181443a0227061abf3.svg" />
            </Link>
            <button className="self-center p-5 bg-gray-300 text-gray-100 font-semibold w-48 rounded-full m-5" type="button">
              Add Property
            </button>
          </div>
        </div>
        <p className="bg-red-700 text-center self-center text-gray-100 min-w-[380px] rounded-b-md">You reached the limit of properties added</p>
      </div>

    );
  }
  return (
    <div className="flex justify-center bg-gray-100">
      <div className="flex justify-between items-center w-[1320px]">
        <Link to="/">
          <img className="w-48 px-1" alt="home" src="https://tabas.com/packs/media/images/logo-dark-e153277a7756ce181443a0227061abf3.svg" />
        </Link>
        <button className="self-center p-5 bg-gray-900 text-gray-100 font-semibold w-48 rounded-full m-5" type="button" onClick={routeChange}>
          Add Property
        </button>
      </div>
    </div>
  );
};

export default Navbar;

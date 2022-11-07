import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    navigate('create');
  };

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

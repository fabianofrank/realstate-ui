import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProperty } from '../redux/store/propertySlice';

export default function PropertyCreate() {
  const properties = useSelector((state) => state.indexOfProperties.properties);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();

    data.append('property[name]', event.target.name.value);

    Array.from(event.target.images.files).forEach((image) => {
      data.append('property[images][]', image);
    });
    dispatch(addProperty(data))
      .then(() => {
        navigate('/');
      });
  };

  if (properties.length > 50) {
    return (
      <h2 className="flex justify-center items-center text-4xl w-full h-full bg-gray-100 absolute">You need to delete a property to add another one</h2>
    );
  }
  return (
    <div className="flex justify-center">
      <form className="bg-gray-100 m-5 rounded-md flex flex-col space-y-2 p-5 w-[1080px]" onSubmit={(e) => handleSubmit(e)}>
        <input className="bg-gray-100 h-8" type="text" name="name" id="name" placeholder="Distric" />
        <button className="self-center p-3 bg-blue-300 text-gray-100 font-semibold w-36 rounded-full m-5" type="submit">Upload</button>
      </form>
    </div>

  );
}

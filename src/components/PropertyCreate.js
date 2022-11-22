import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProperty } from '../redux/store/propertySlice';

export default function PropertyCreate() {
  const properties = useSelector((state) => state.indexOfProperties.properties);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const uploadForm = (event) => {
    event.preventDefault();
    const data = new FormData();

    data.append('property[name]', event.target.name.value);
    data.append('property[city]', event.target.city.value);
    data.append('property[description]', event.target.description.value);
    data.append('property[address]', event.target.address.value);
    data.append('property[bed]', event.target.bed.value);
    data.append('property[bath]', event.target.bath.value);
    data.append('property[parking]', event.target.parking.value);
    data.append('property[size]', event.target.size.value);
    data.append('property[price]', event.target.price.value);

    Array.from(event.target.images.files).forEach((image) => {
      data.append('property[images][]', image);
    });

    dispatch(addProperty(data))
      .then(() => {
        navigate('/');
      });
  };

  const MIN_LENGTH = 3;
  const MAX_LENGTH = 5;

  const multipleFilesAlert = (e) => {
    if (Array.from(e.target.files).length < MIN_LENGTH
    || Array.from(e.target.files).length > MAX_LENGTH) {
      e.preventDefault();
      alert('Please select only 3 to 5 images');
    }
  };

  const handleSubmit = (e) => {
    if (multipleFilesAlert === true) {
      e.preventDefault();
    } else {
      uploadForm(e);
    }
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
        <input className="bg-gray-100 h-8" type="text" name="city" id="city" placeholder="City" />
        <input className="bg-gray-100 h-8" type="text" name="description" id="description" placeholder="Description" />
        <input className="bg-gray-100 h-8" type="text" name="address" id="address" placeholder="Street, Number" />
        <input className="bg-gray-100 h-8" type="number" name="bed" id="bed" placeholder="Bedrooms" />
        <input className="bg-gray-100 h-8" type="number" name="bath" id="bath" placeholder="Bathrooms" />
        <input className="bg-gray-100 h-8" type="number" name="parking" id="parking" placeholder="Parking slots" />
        <input className="bg-gray-100 h-8" type="number" step="0.1" name="size" id="size" placeholder="Size in sqm" />
        <input className="bg-gray-100 h-8" type="number" step="0.1" name="price" id="price" placeholder="Price" />
        <input className="bg-gray-100 h-8" type="file" multiple name="images" id="images" placeholder="select 3 to 5 images" onChange={multipleFilesAlert} />
        <button className="self-center p-3 bg-blue-300 text-gray-100 font-semibold w-36 rounded-full m-5" type="submit">Upload</button>
      </form>
    </div>

  );
}

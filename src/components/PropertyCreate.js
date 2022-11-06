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
  if (properties >= 50) {
    return (
      <div>You reached the limit of storage</div>
    );
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" name="name" id="name" placeholder="Insert the House's name" />
      <input type="file" multiple name="images" id="images" />
      <button type="submit">Upload</button>
    </form>
  );
}

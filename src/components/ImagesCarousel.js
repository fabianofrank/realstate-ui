import propTypes from 'prop-types';
import React from 'react';

const Carousel = ({ props }) => {
  Carousel.propTypes = {
    props: propTypes.array.isRequired,
  };
  return (
    <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          {
          props.map((imageURL) => (
            <img className="block w-full" key={props.id} src={imageURL} alt="ok" />
          ))
        }

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;

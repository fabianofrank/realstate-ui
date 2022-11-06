/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import 'tw-elements';
import React from 'react';

const Carousel = ({ props }) => {
  const { images, id } = props;
  return (
    <div id={`card-${id}`} className="carousel slide relative max-w-[640px]" data-bs-ride="carousel">
      <div className="carousel-inner relative w-full overflow-hidden">

        {
          images.map((imageURL, index) => (
            <div key={index} id={index} className={index === 0 ? 'carousel-item relative active float-left w-full' : 'carousel-item relative float-left w-full '}>
              <img className="block w-full" src={imageURL} alt="ok" />
            </div>
          ))
        }

      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target={`#card-${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target={`#card-${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

Carousel.propTypes = {
  props: PropTypes.objectOf.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

export default Carousel;

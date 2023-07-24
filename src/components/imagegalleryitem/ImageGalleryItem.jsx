import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  useEffect(() => {
    console.log('Componet is mounted');

    return () => {
      console.log('Componet will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('new image');
  }, [image]);

  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={() => onClick(image.largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

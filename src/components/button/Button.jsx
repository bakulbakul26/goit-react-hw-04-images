import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onClick }) => {
  useEffect(() => {
    console.log('Componet is mounted');

    return () => {
      console.log('Componet will unmount');
    };
  }, []);

  return (
    <button className={css.btn} onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;

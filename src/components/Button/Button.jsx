import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ onBtnClick }) {
  return (
    <button className={s.button} onClick={onBtnClick} type="button">
      Load more
    </button>
  );
}

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};

export default Button;

import React from 'react';
import s from './Button.module.css';

function Button({ onBtnClick }) {
  return (
    <button className={s.button} onClick={onBtnClick} type="button">
      Load more
    </button>
  );
}

export default Button;

import React from 'react';
import s from './Button.module.css';

const Button = ({ children, onClick, ...allyProps }) => (
  <button type="button" clasname={s.Button} onClick={onClick} {...allyProps}>
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => null,
  children: null,
};

export default Button;

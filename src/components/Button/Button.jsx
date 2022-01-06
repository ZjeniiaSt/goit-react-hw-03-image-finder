import React from 'react';
import { Button } from './Button.style';
import PropTypes from 'prop-types';

function OnButton({ onBtnClick }) {
  return (
    <Button onClick={onBtnClick} type="button">
      Load more
    </Button>
  );
}

Button.propTypes = {
  onBtnClick: PropTypes.func,
};

export default OnButton;

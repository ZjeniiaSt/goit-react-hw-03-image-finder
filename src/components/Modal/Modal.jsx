import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyle } from './Modal.style';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlKeyDown);
  }

  handlKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handlBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handlBackdropClick}>
        <ModalStyle>{this.props.children}</ModalStyle>
      </Overlay>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Modal;

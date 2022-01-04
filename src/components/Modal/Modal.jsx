import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

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
    const { children } = this.props;
    return createPortal(
      <div className={s.Overlay} onClick={this.handlBackdropClick}>
        <div className={s.Modal}>{children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;

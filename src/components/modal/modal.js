import React, { useRef } from 'react';
import './modal.scss';

const Modal = ({ children, hideModal }) => {
  const modalRef = useRef(null);

  const hideModalHandler = (event) => {
    const modal = modalRef.current;
    if (event.target === modal) hideModal();
  };

  return (
    <div className='modal' ref={modalRef} onClick={hideModalHandler}>
      <div className='modal__content animate'>
        <button className='modal__close' type='button' onClick={hideModal}>x</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

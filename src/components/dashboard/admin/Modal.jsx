import React from 'react';
import './modal.css';
import CreateEmployee from '../../createEmployee/createEmployee';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content d-flex justify-content-center align-items-center" onClick={e => e.stopPropagation()}>
        <CreateEmployee/>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
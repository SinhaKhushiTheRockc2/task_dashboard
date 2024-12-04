import React from "react";
import styled from "styled-components";

const Modal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <Overlay>
      <ModalContent>
        <h3>Are you sure you want to delete this task?</h3>
        <div>
          <button onClick={onConfirm} className="confirm">Yes</button>
          <button onClick={onClose} className="cancel">No</button>
        </div>
      </ModalContent>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  .confirm, .cancel {
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .confirm {
    background-color: #dc3545;
    color: white;
  }

  .cancel {
    background-color: #6c757d;
    color: white;
  }

  .confirm:hover {
    background-color: #c82333;
  }

  .cancel:hover {
    background-color: #5a6268;
  }
`;

export default Modal;

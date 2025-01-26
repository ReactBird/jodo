import React from 'react';
import './Modal.scss';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>提示</h2>
        <p>该网页仅供学习使用。</p>
        <button onClick={onClose}>关闭</button>
      </div>
    </div>
  );
};

export default Modal;
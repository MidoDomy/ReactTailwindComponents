import React from 'react';

import Button from 'components/Button/Button';

import 'assets/scss/component/modal/_modal.scss'

type ModalProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => void;
}

const Modal: React.FC<ModalProps> = ({ children, className, size, title, onClick }) => {
  return (
    <div className={`modal-outer${className ? ' '+className : ''}`}>
      <div className="modal-close-overlay" onClick={onClick}></div>
      
      <div className={`modal modal-${size}`}>
        <div className="modal-header">
          <h3>{ title }</h3>
          <Button onClick={onClick}>X</Button>
        </div>

        <div className="modal-content">
          { children }
        </div>
      </div>
    </div>
  );
}

Modal.defaultProps = {
  size: 'md'
}

export default Modal;

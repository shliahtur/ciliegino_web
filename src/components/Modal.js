import React, {Fragment} from 'react';

import Portal from './Portal';

import '../styles/Modal.css';

const Modal = ({
  title, isOpen, onSubmit, children, onCancel, withDeleteBtns, width
}) => {

  return (
    <Fragment>
      { isOpen &&
        <Portal>
          <div className="modalOverlay" onClick={onCancel}>
                <div className="modalWindow" style={{width: `${width}px`}}> 
      
              <div className="modalHeader">
                <div className="modalTitle">{title}</div>
                <div className="close-btn" name="times" onClick={onCancel}></div>
              </div>
              <div className="modalBody">
                {children}
              </div>
              { withDeleteBtns &&
              <div className="modalFooter">
              <button className="modal-btn modal-cancel-btn" onClick={onCancel}>Назад</button>
              <button className="modal-btn modal-delete-btn" onClick={onSubmit}>Видалити</button>
               </div>
              }

            </div>
          </div>
        </Portal>
      }
    </Fragment>
  );
};

export default Modal;
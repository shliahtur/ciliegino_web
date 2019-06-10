import React, { Fragment } from 'react';
import Portal from './Portal';

import '../styles/Modal.css';

const Alert = ({
  isOpen, alertMessage, onCancel
}) => {

  return (
    <Fragment>
      {isOpen &&
        <Portal>
          <div className="modalOverlay" onClick={onCancel}>
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="modalTitle">
                  {alertMessage ? alertMessage : ''}
                </div>
                <div className="close-btn" name="times" onClick={onCancel}></div>
              </div>
              <div className="modalBody">

              </div>
              <div className="modalFooter">
                <button className="modal-btn modal-cancel-btn" onClick={onCancel}>ок</button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </Fragment>
  );
};

export default Alert;
import React from 'react';
import classNames from 'classnames';
import Portal from './Portal';
import '../styles/Preloader.css';

const Preloader = ({ className, size }) => {
  const classes = classNames(
    'preloader',
    className,
  );

  return (
    <React.Fragment>
      {size ?
        <div className={classes}>
          <div className="lds-ring">
            <div style={{ width: `${size}0px`, height: `${size}0px`, border: `${size}px solid #fff` }}></div>
            <div style={{ width: `${size}0px`, height: `${size}0px` }}></div>
            <div style={{ width: `${size}0px`, height: `${size}0px` }}></div>
            <div style={{ width: `${size}0px`, height: `${size}0px` }}></div>
          </div>
        </div>
        :
        <Portal>
          <div className="preloader-overlay">
            <div className="lds-ring preloader-window">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </Portal>
      }
    </React.Fragment>
  );
};

export default Preloader;
import React from 'react';
import classNames from 'classnames';

import '../styles/Preloader.css';

const Preloader = ({ className, size}) => {
  const classes = classNames(
    'preloader',
    className,
  );

  return (
    <div className={classes}>
      {size  ?
        <div className="lds-ring">
          <div style={{ width: `${size}0px`, height: `${size}0px`, border: `${size}px solid #fff` }}></div>
          <div style={{ width: `${size}0px`, height: `${size}0px`}}></div>
          <div style={{ width: `${size}0px`, height: `${size}0px`}}></div>
          <div style={{ width: `${size}0px`, height: `${size}0px`}}></div>
        </div>
        :
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      }

    </div>
  );
};

export default Preloader;
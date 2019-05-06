import React from 'react';

import '../styles/Preloader.css';


const Preloader = () => {
  return (
    <div className="preloader">
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
  );
}

export default Preloader;
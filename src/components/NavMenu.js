import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavMenu.css';

export default props => (

    <nav className="nav-bar">
     <ul>
      <li><Link className="nav_link" to={'/'}>Меню</Link></li>
      <li><Link className="nav_link" to={'/'}>Меню</Link></li>
      <li><Link className="nav_link" to={'/'}>Меню</Link></li>
      </ul>
    </nav>
);



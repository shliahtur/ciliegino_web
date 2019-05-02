import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavMenu.css';

export default props => (

    <nav className="nav-bar">
     <ul>
      <li><Link className="nav_link" to={'/'} >Главная</Link></li>
      <li><Link className="nav_link" to={'/fetchdata'}>Таблица1</Link></li>
      <li><Link className="nav_link" to={'/'}>Таблица2</Link></li>
      <li><Link className="nav_link" to={'/'}>Таблица3</Link></li>
      </ul>
    </nav>
);



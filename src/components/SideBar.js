import React, { Component } from 'react';
import '../styles/SideBar.css';
import { Link } from 'react-router-dom';

class SideBar extends Component {
    state = {}
    render() {
        return (
            <div className="side-bar">
                <div className="logo"></div>
                <ul>
                    <li>
                        <Link to="/">
                            <button type="button">Заява</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/fetchdata">
                            <button type="button">Таблиця</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/datatable">
                            <button type="button">Табла2</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <button type="button">Заява</button>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SideBar;